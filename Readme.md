## Things to keep in mind while writing Backend 

    npm init 
create .gitignore   using web <br> 
create .env <br>
create .env.sample its for sample test data <br>

create src source folder <br>
 use command line its good practice <br>
 use git bash 
  
    touch app.js constants.js index.js 
 1.Do few things in package.json file <br>
 we need import syntax to bring the packages to do so we have to add
 this 
   
    "type":"module"
install nodemon package to restart the project by itself

    npm i -D nodemon

we have to add this package.json file in js

     "script":{
        "dev": "nodemon src/index.js"
     }  
crete directory  do this inside src
    
        mkdir controllers db middlewares models routes utils 
   
we need prettier plugin 
    
    npm i -D prettier 
create .prettierrc 
    
         {
             "singleQuote":false,
             "bracketSpacing":true,
             "tabWidth":2 ,
             "trailingComma":"es5",
             "semi":true

        }
create prettierignore 
     
     *.env
     .env
     .env.*
     /.vscode
     /node_modules
     ./dist

install mongoose express and dotenv

    npm i mongoose express dotenv

create a file index.js inside the db folder

        import mongoose from "mongoose";
        import {DB_NAME } from "../contants";


     const connectDB = async()=>{
    try{
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST :${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MongoDB Connection Error ",error);
        process.exit(1)
            }
        }


        export default connectDB



