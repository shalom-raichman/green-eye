const exp = require("express")
const dotenv = require("dotenv")

const app = exp()
dotenv.config()
const PORT = process.env.PORT || 1415

app.listen(PORT, ()=>console.log(`Server is up and running on port ${PORT}`))