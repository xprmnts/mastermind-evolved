import connectDB from '../../../middleware/db';
import User from '../../../models/user';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { username } = req.body;

        if (username) {
            try {
                console.log(username);
                // find if user already exists

                const existingUser = await User.find({ username }).exec();

                if (existingUser.length) {
                    res.status(422).json({ message: 'User exists already!' });
                    return;
                } else {
                    res.status(201).json({ message: 'User does not exist!' });
                    return;
                }
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
