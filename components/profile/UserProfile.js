import { getSession } from 'next-auth/client';
import { useState, useEffect } from 'react';

function UserProfile() {
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     getSession().then(session => {
    //         if (!session) {
    //             window.location.href = '/auth';
    //         } else {
    //             setIsLoading(false);
    //         }
    //     });
    // }, []);

    // if (isLoading) {
    //     return <p>loading...</p>;
    // }
    // TODO: Redirect away if NOT auth

    return (
        <section>
            <h1>Your User Profile</h1>
        </section>
    );
}

export default UserProfile;
