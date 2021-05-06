import { getSession } from 'next-auth/client';
import UserDashboard from '../components/dashboard/UserDashboard';

function ProfilePage() {
    return <UserDashboard />;
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        };
    }

    return {
        props: { session }
    };
}

export default ProfilePage;
