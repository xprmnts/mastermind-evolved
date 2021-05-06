import { getSession } from 'next-auth/client';
import AuthForm from '../components/auth/AuthForm';

function AuthPage() {
    return <AuthForm />;
}

export async function getServerSideProps(context) {
    console.log(process.env.mongodburl);
    console.log(process.env.NEXTAUTH_URL);
    const session = await getSession({ req: context.req });

    if (session) {
        return {
            redirect: {
                destination: '/profile',
                permanent: false
            }
        };
    }

    return {
        props: { session }
    };
}

export default AuthPage;
