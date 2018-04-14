var db = require("./db")
var team = db.Schema({
    name: {
        type: String,
        required: true
    },
<<<<<<< Updated upstream
    members:
        [{
            type: db.Schema.Types.ObjectId,
            ref: "User"
        }]
    ,
=======
    members: {
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }]
    },
>>>>>>> Stashed changes
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }
})


module.exports = db.model("Team", team)
