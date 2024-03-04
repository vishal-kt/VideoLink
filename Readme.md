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

bring all your code in index.js
    
    import dotenv from 'dotenv'
    import connectDB from './db/index.js';


     connectDB()
        .then(()=>{
            app.listen(process.env.PORT||8000,()=>{
                console.log(` 😁 server is running at PORT ${process.env.PORT}`);
            })

            app.on('error 😣' ,(error)=>{console.error("server failed to start",error);
            });
            
        })
        .catch((error)=>{
            console.log("Mongo DB Connection Failed !!!!",error);    
        })  



install cookie-parser cors

import them in apps 


## CORS, or Cross-Origin Resource Sharing, is a security feature in web browsers. It controls which websites can access data from other websites. It's used to protect users' data and resources by preventing unauthorized access from malicious websites. CORS allows servers to specify which origins are allowed to access their resources, enabling controlled sharing of data between different domains while maintaining security. In simpler terms, CORS helps keep your data safe on the internet by controlling who can access it from other websites.



# inside post do this 

Open Postman. <br>
Select the HTTP method as POST. <br>
Enter the URL for your endpoint: http://localhost:your_port/api/v1/users/signup (replace your_port with the port number your server is running on).<br>
Go to the "Body" tab.<br>
Select "raw" and choose "JSON" from the dropdown menu.<br>
Enter your JSON data in the text area. For example:<br>

     {
    "username": "example_user",
    "email": "example@example.com",
    "password": "example_password"
    }
