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

