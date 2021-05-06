import { useEffect } from 'react';

export default function GameBoard() {
    useEffect(() => {
        console.log('initialize game');
    }, []);

    return (
        <main>
            <h1 className='landing-page-header'>Mastermind Game Board</h1>
        </main>
    );
}
