// // Import the User model using ES6 import syntax
// // import { User } from '../models/user.model.js'; // Adjust the path as necessary
// // import asyncHandler from '../utils/asyncHandler.js'; // Import the asyncHandler middleware
// // import ApiError from '../utils/ApiError.js'; // Import the ApiError class
// // import ApiResponse from '../utils/ApiResponse'; // Import the ApiResponse class
// import { User } from '../models/user.model.js';
// import { asyncHandler } from "../utils/asyncHandler.js";
// import ApiError from '../utils/ApiError.js'
// import ApiResponse from '../utils/ApiResponse.js'; 
// // Signup route handler
// const signUpUser = asyncHandler(async (req, res) => {
//     // Extract user data from request body
//     const { username, email, password } = req.body;
//     try {
//         // Check if username or email already exists
//         const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//         if (existingUser) {
//             throw new ApiError(400, 'Username or email already exists');
//         }
//         // Create a new user instance
//         const newUser = new User({ username, email, password });
//         // Save the new user to the database
//         await newUser.save();
//         // Return success response
//         const responseData = { username: newUser.username, email: newUser.email }; // You can customize the response data as needed
//         const response = new ApiResponse(201, responseData, 'User registered successfully');
//         res.status(response.statusCode).json(response);
//     } catch (error) {
//         // Handle errors and return appropriate error response
//         next(error); // Assuming asyncHandler middleware handles errors
//     }
// });
// // Export the route handler
// export default signUpUser;


import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import asyncHandler from "../utils/asyncHandler.js"



const signUpUser = asyncHandler(async(req,res)=>{

    const {username,email,password} =req.body

    if(
        [username,email,password].some((field)=>field?.trim()==="")
        
    ){
        throw new ApiError(400,"All Fields are Required 🙄")
    }

    const existingUser = await  User.findOne({
        $or:[{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409,"User with Email or Username already exist")
    }

    const user = await User.create({username:username.toLowerCase(),email,password})


    const createdUser = await  User.findById(user._id).select("-password -refreshToken")

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user 😪 ")
    }
     
    return res.status(201).json(new ApiResponse(200,createdUser,"User Created successfully 😁😍"))
})

export default signUpUser;