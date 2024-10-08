const exp = require("express");
const dotenv = require("dotenv");
const { connectToMongoo } = require("./config/dbConfig");
const cookieParser = require("cookie-parser");
const { specs, swaggerUi } = require("./config/swagger");

const app = exp();
dotenv.config();
connectToMongoo();
const PORT = process.env.PORT || 1415;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(exp.json());
app.use(cookieParser());

app.use("/auth", require("./routes/authRouter"));
app.use("/user", require("./routes/userRouter"));
app.use("/greenEye", require("./routes/greenEyeRouter"));

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT} http://localhost:${PORT}/api-docs`));
