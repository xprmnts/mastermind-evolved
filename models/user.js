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

mongoose.models = {};

const User = mongoose.model('User', user);

export default User;
