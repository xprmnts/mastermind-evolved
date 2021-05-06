import connectDB from '../../../middleware/db';
import Game from '../../../models/game';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // Check if userId is provided
        const { userId } = req.body;

        if (userId) {
            try {
                // generate secretCode
                const secret = '1234';
                const game = new Game({
                    user: userId,
                    secretCode: secret
                });
                // Create new game
                const gameCreated = await game.save();

                return res.status(201).send(gameCreated);
            } catch (error) {
                return res.status(500).send(error.message);
            }
        } else {
            res.status(422).send('data_incomplete');
        }
    } else {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);
