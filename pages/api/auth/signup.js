import connectDB from '../../../middleware/db';
import bcrypt from 'bcrypt';
import User from '../../../models/user';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // Check if name, email or password is provided
        const { username, password } = req.body;

        if (username && password) {
            try {
                // find if user already exists

                const existingUser = await User.find({ username }).exec();

                if (existingUser.length) {
                    res.status(422).json({ message: 'User exists already!' });
                    return;
                }
                // Hash password to store it in DB

                const passwordhash = await bcrypt.hash(password, 12);

                const user = new User({
                    username,
                    password: passwordhash
                });
                // Create new user
                const userCreated = await user.save();
                return res.status(201).send(userCreated);
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
