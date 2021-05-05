import { Layout } from 'antd';
import MainHeader from '../components/layout/MainHeader';

export default function Home() {
    return (
        <Layout className='layout'>
            <MainHeader />
            <main>
                <h1>Mastermind Landing Page</h1>
            </main>
        </Layout>
    );
}
