const mongoos = require("mongoose");


const connectToMongoo = async () => {
    try {
        await mongoos.connect("mongodb://localhost:27017/green_eye");
        console.log("successfuly connected to mongo ");
    } catch (err) {
        console.log(err);
    }
};


module.exports = {
    connectToMongoo,
};
