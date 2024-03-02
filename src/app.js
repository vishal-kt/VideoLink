import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import signupRoute from "./routes/user.routes.js"


const app = express()

    //use method is to configure things here we will configure cors

    app.use(cors({
        origin:process.env.CORS_ORIGIN,
        credentials:true     

    }))

    app.use(express.json({limit:"16kb"}))
    app.use(express.urlencoded({extended:true,limit:"16kb"}))
    app.use(express.static("public"))
    app.use(cookieParser())

   app.use("/api/v1/users",signupRoute);


export{app}