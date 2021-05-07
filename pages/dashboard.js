import { getSession } from 'next-auth/client';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/user-slice';

import UserDashboard from '../components/dashboard/UserDashboard';

function Dashboard({ username, userId }) {
    const dispatch = useDispatch();
    dispatch(userActions.authenticate({ username, userId }));

    return <UserDashboard />;
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    const { username, userId } = session;

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        };
    }

    return {
        props: { username, userId }
    };
}

export default Dashboard;
