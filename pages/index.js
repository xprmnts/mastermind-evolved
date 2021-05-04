import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Mastermind - Evolved</title>
                <meta
                    name='description'
                    content='Mastermind, taken to a new level.'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <h1>Welcome to Mastermind!</h1>
            </main>
        </div>
    );
}
