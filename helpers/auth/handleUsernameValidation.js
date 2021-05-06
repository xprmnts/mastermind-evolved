export default async function handleUsernameValidation(username) {
    try {
        const response = await fetch('/api/auth/validate-user', {
            method: 'POST',
            body: JSON.stringify({ username }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong!');
        }
    } catch (error) {
        return Promise.reject(error.message);
    }

    return Promise.resolve(true);
}
