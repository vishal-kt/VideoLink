import mongoose ,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";




const userSchema = new Schema(
    {
    
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase :true,
            trim:true,
            index:true
          },
            email: {
          
            type: String,
            required: true,
            unique: true,
            lowercase :true,
            trim:true,
            
        },
          password: {
        
            type: String,
            required: true
        
        },

    }
)

// Before saving a user document to the database, we use a pre-save middleware function (userSchema.pre('save', ...)) to hash the password securely.




userSchema.pre('save', async function(next) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });
  
  // Method to compare passwords
  userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };
  
  // Generate JWT token
  userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
      { _id: this._id }
      , 
      process.env.ACCESS_TOKEN_SECRET,
       {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY // Token expires in 10 days
    });
  };
 
  userSchema.methods.generateRefreshToken =function () {
    return jwt.sign({_id:this._id})
    ,process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY,
      
    }
  }


// //hash password before saving user 
// userSchema.pre("save",async function (next) {
 
//     try {

        
//     if(!this.isModified("password")) return next();

//     this.password = bcrypt.hash(this.password,10)
    
//     next()
        
//     } catch (error) {
//         next(error)    
//     }
    
// })


// userSchema.methods.isPasswordCorrect = async function (password) {
    
//     return await bcrypt.compare(password,this.password)

// }





export const User =mongoose.model("User",userSchema);