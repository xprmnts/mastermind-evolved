import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../../store/game-slice';

export default function GameBoard() {
    const userId = useSelector(state => state.user.userId);
    const dispatch = useDispatch();

    const createGameRequest = async userId => {
        try {
            const resp = await axios.post('/api/game/create', {
                userId: userId
            });

            const { _id, status, attemptsAllowed, attemptsUsed } = resp.data;

            dispatch(
                gameActions.startGame({
                    _id,
                    status,
                    attemptsAllowed,
                    attemptsUsed
                })
            );
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    useEffect(() => {
        // create game
        //console.log(username);
        createGameRequest(userId);
        // TODO: load existing game
    }, []);

    return (
        <main>
            <h1 className='landing-page-header'>Mastermind Game Board</h1>
        </main>
    );
}
