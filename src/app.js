const express = require("express")
const cookieParser = require("cookie-parser")


const app = express()

app.use(express.json())
app.use(cookieParser())


/* require all the routes here */
const authRouter = require("./routes/auth.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)



app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
module.exports = app