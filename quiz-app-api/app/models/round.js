var db = require('./db')

var round = db.Schema({
    roundName: {
        type: String,
        required: true,
    },
    questions:
        [{
        	type: db.Schema.Types.ObjectId,
            ref: 'Category',
            count: Number
        }],
    weightage: {
        type: Number,
        default: new Date(),
    },
     type: {
        type: String,
        required: true,
        enum: ['BUZZER', 'PASS', 'TIMER'],
        default: 'TIMER'
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = db.model('Round', round);
