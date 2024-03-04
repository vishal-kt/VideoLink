import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const signUpUser = asyncHandler(async (req, res) => {
    const {username,email,password } = req.body;

    if ([username, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All Fields are Required 🙄");
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        throw new ApiError(409, "User with Email or Username already exists");
    }

    const newUser = await User.create({username,email,password});

    // Customize response data to include only necessary information
    const responseData = { id: newUser._id, username: newUser.username, email: newUser.email };
    const response = new ApiResponse(200, responseData, "User registered successfully");

    res.status(response.statusCode).json(response);
});

export default signUpUser;
