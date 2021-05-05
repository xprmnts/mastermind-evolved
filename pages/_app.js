import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/globals.css';

import { Layout } from 'antd';
import MainHeader from '../components/layout/MainHeader';

function MyApp({ Component, pageProps }) {
    return (
        <Layout className='layout'>
            <MainHeader />
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
