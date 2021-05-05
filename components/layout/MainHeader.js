import Link from 'next/link';
import { Layout, Button, Row, Col } from 'antd';
const { Header } = Layout;

function MainHeader() {
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
                            <li>
                                <Link href='/auth'>Login</Link>
                            </li>
                            <li>
                                <Link href='/profile'>Profile</Link>
                            </li>
                            <li>
                                <Button type='primary'>Logout</Button>
                            </li>
                        </ul>
                    </nav>
                </Header>
            </Col>
        </Row>
    );
}

export default MainHeader;
