// loginUser.controller.js

import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    // Check if the password is correct
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
        throw new ApiError(401, "Invalid password");
    }

    // Generate JWT token
    const token = user.generateRefreshToken();

    // Return success response with token
    const welcomeMessage = `Welcome aap ka swagat h 👐 , ${user.username}`;
    const responseData = {token , username:user.name,welcomeMessage}
    res.status(200).json(new ApiResponse(200, responseData , "Login successful"));
});

export default loginUser;
