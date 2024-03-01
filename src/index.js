import dotenv from 'dotenv'
import connectDB from './db/index.js';


dotenv.config({
    path:'./env'
})

//this is a promise so it return then and catch 
    connectDB()
        .then(()=>{
            app.listen(process.env.PORT||8000,()=>{
                console.log(` 😁 server is running at PORT ${process.env.PORT}`);
            })

            app.on('error 😣' ,(error)=>{console.error("server failed to start",error);
            });
        })
        .catch((error)=>{
            console.log("Mongo DB Connection Failed 😭 !!!!",error);    
        })  