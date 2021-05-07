import GameBoard from '../components/game/GameBoard';
import { useSelector } from 'react-redux';

export default function Game() {
    const username = useSelector(state => state.user.username);
    return <GameBoard username={username} />;
}
