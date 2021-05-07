import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const game = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['WON', 'LOST', 'PLAYING'],
        default: 'PLAYING'
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
    attemptsUsed: {
        type: Number,
        default: 0
    }
});

const Game = mongoose.models.Game || mongoose.model('Game', game);

export default Game;
