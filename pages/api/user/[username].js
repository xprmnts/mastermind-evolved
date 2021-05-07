import connectDB from '../../../middleware/db';
import User from '../../../models/user';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        // Check if userId is provided
        const { username } = req.query;

        if (username) {
            try {
                const user = await User.findOne({ username });
                await user.populate('games').execPopulate();

                return res.status(201).send(user.games);
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
