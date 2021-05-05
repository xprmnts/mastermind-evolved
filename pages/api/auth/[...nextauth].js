import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import connectDB from '../../../middleware/db';
import User from '../../../models/user';

export default connectDB(
    NextAuth({
        session: {
            jwt: true
        },
        providers: [
            Providers.Credentials({
                async authorize(credentials) {
                    const { username } = credentials;
                    const existingUser = await User.findOne({
                        username
                    }).exec();

                    if (!existingUser) {
                        throw new Error('No user found!');
                    }

                    const isValid = await bcrypt.compare(
                        credentials.password,
                        existingUser.password
                    );

                    if (!isValid) {
                        throw new Error('Invalid username or password!');
                    }

                    return {};
                }
            })
        ],
        site: process.env.NEXTAUTH_URL
    })
);
