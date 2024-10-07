const mongoos = require("mongoose");

const poulationSchema = mongoos.Schema({
    areas: [String],
    units: [Number]
})

const GreenEyeSchema = new mongoos.Schema({
    created_at: {
        type: Date,
        default: Date.now,
    },
    created_by: {
        type: mongoos.Schema.ObjectId,
        ref: "user",
        required: [true, "please tell me who you are"],
    },
    length: {
        type: Number,
        default: 3,
    },
    replies: {
        type: [mongoos.Schema.Types.ObjectId],
        ref: "user",
    },
    population: {
        type: poulationSchema
    }
});

const GreenEyeModel = mongoos.model("user", GreenEyeSchema);

module.exports = UserModel;
