import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/globals.css';

import { Provider } from 'next-auth/client';
import { Provider as ReduxProvider } from 'react-redux';
import { Layout } from 'antd';
import MainHeader from '../components/layout/MainHeader';
import store from '../store/index';

function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <ReduxProvider store={store}>
                <Layout className='layout'>
                    <MainHeader />
                    <Component {...pageProps} />
                </Layout>
            </ReduxProvider>
        </Provider>
    );
}

export default MyApp;
