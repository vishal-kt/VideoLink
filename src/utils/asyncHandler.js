const asyncHandler = (requestHandler) => {
    // Returns a middleware function with parameters req, res, and next
    return (req, res, next) => {
        // Creates a Promise object
        Promise
            // Resolves the Promise with the result of calling requestHandler
            .resolve(requestHandler(req, res, next))
            // Catches any errors and passes them to the next middleware
            .catch((err) => next(err));
    };
};



export default asyncHandler
    //we will use promise 


    //async (req, res, next )=>{
    // try {

    //     await requestHandler(req,res,next)
        
    //     } catch (error) {

    //     res.status(err.code||500).json({
    //         success:false,
    //         message:err.message
    //     })
    // }}



