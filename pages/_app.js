import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/globals.css';

import { Provider } from 'next-auth/client';
import { Layout } from 'antd';
import MainHeader from '../components/layout/MainHeader';

function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Layout className='layout'>
                <MainHeader />
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
