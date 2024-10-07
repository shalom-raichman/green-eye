const mongoos = require("mongoose");

const userSchema = new mongoos.Schema({
    user_name: {
        type: String,
        required: [true, "user name is required"],
        minlength: [5, "wey to short name, please enter at least 5 chars"],
    },
    password: {
        type: String,
        required: [true, "password must be provided"],
    },
    role: {
        type: String,
        enum: ["soldier", "commander"],
        required: [true, "please provide a role"]
    },
});

const UserModel = mongoos.model("user", userSchema);
