import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const game = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    isFinished: {
        type: Boolean,
        default: false
    },
    started: {
        type: Date,
        default: Date.now
    },
    secretCode: {
        type: String,
        required: true
    },
    attemptsAllowed: {
        type: Number,
        default: 10
    },
    attemptedUsed: {
        type: Number,
        default: 0
    }
});

const Game = mongoose.models.Game || mongoose.model('Game', game);

export default Game;
