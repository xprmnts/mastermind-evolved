import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import connectDB from '../../../middleware/db';
import User from '../../../models/user';

export default connectDB(
    NextAuth({
        session: {
            jwt: true
        },
        callbacks: {
            async session(session, token) {
                session.username = token.username;
                session.userId = token.userId;

                return session;
            },
            async jwt(token, user) {
                // Add access_token to the token right after signin
                if (user?.userId) {
                    token.userId = user.userId;
                    token.username = user.username;
                }

                return token;
            }
        },
        providers: [
            Providers.Credentials({
                async authorize(credentials) {
                    const { username, password } = credentials;
                    const existingUser = await User.findOne({
                        username
                    }).exec();

                    if (!existingUser) {
                        throw new Error('No user found!');
                    }

                    const isValid = await bcrypt.compare(
                        password,
                        existingUser.password
                    );

                    if (!isValid) {
                        throw new Error('Invalid username or password!');
                    }
                    const user = {
                        userId: existingUser._id,
                        username: existingUser.username
                    };
                    return user;
                }
            })
        ]
    })
);
