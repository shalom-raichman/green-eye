const {login: loginFromSrvice} = require("../sevices/authService")

const login = async (req, res) => {
    try {
        const token = await loginFromSrvice(req.body)
        res.cookie("token", token)
        res.json({
            msg: `Welcome ${req.body.user_name}! so good to se you!!`
        })
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
};

const logout = async (req, res) => {
    try {
    } catch (err) {}
};

module.exports = {
    login,
    logout
};
