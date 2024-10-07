const exp = require("express");
const dotenv = require("dotenv");
const { connectToMongoo } = require("./config/dbConfig");

const app = exp();
dotenv.config();
connectToMongoo();
const PORT = process.env.PORT || 1415;

app.use(exp.json());
app.use("/auth", require("./routes/authRouter"));
app.use("/user", require("./routes/userRouter"));
app.use("/greenEye", require("./routes/greenEyeRouter"));

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
