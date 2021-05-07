import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../../store/game-slice';
import { Row, Col, Table } from 'antd';
import CodeSelector from './CodeSelector';
import columns from '../../assets/tableHeader';

export default function GameBoard() {
    const userId = useSelector(state => state.user.userId);
    const gameHistory = useSelector(state => state.game.history);
    console.log(gameHistory);

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
        <Row gutter={[0, 16]} className='game-container'>
            <Col xs={24} sm={24} className='table-container'>
                <Table
                    pagination={false}
                    dataSource={gameHistory}
                    columns={columns}
                    bordered={false}
                />
            </Col>
            <Col xs={24} sm={24} className='action-container'>
                <CodeSelector />
            </Col>
        </Row>
    );
}
