import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const user = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    since: {
        type: Date,
        default: Date.now
    }
});

user.virtual('games', {
    ref: 'Game',
    localField: '_id',
    foreignField: 'player'
});

const User = mongoose.models.User || mongoose.model('User', user);

export default User;
