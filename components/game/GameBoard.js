import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function GameBoard() {
    const userName = useSelector(state => state.user.userName);

    useEffect(() => {
        console.log(userName);
        console.log('initialize game');
    }, []);

    return (
        <main>
            <h1 className='landing-page-header'>Mastermind Game Board</h1>
        </main>
    );
}
