import Link from 'next/link';
import { Layout, Button, Row, Col } from 'antd';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/client';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user-slice';
const { Header } = Layout;

function MainHeader() {
    const [session, loading] = useSession();
    const router = useRouter();
    const dispatch = useDispatch();

    async function logoutHandler() {
        const data = await signOut({ redirect: false, callbackUrl: '/auth' });
        dispatch(userActions.deAuthenticate());
        router.push(data.url);
    }

    return (
        <Row justify='center' className='header-container'>
            <Col span={18}>
                <Header className='header'>
                    <Link href='/'>
                        <a>
                            <div className='logo'>Mastermind</div>
                        </a>
                    </Link>
                    <nav>
                        <ul>
                            {!session && !loading && (
                                <li>
                                    <Link href='/auth'>
                                        <Button type='link'>Login</Button>
                                    </Link>
                                </li>
                            )}
                            {session && (
                                <li>
                                    <Link href='/dashboard'>
                                        <Button type='link'>Dashboard</Button>
                                    </Link>
                                </li>
                            )}
                            {session && (
                                <li>
                                    <Button
                                        onClick={logoutHandler}
                                        type='primary'
                                    >
                                        Logout
                                    </Button>
                                </li>
                            )}
                        </ul>
                    </nav>
                </Header>
            </Col>
        </Row>
    );
}

export default MainHeader;
