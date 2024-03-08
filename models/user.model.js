const mongoose = require("mongoose");


//Custom validations 

// function isUserNameCorrect(value) {
//   return /^[a-zA-Z0-9]*$/.test(value);
// }

// function isValidEmail(email) {
//   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
// }

// function isNameCorrect(name) {
//   return /^[A-Za-z]+$/.test(name);
// }

// function isPasswordCorrect(password) {
//   // Regular expressions for each requirement
//   const hasUpperCase = /[A-Z]/.test(value);
//   const hasLowerCase = /[a-z]/.test(value);
//   const hasNumber = /[0-9]/.test(value);
//   const hasSpecialSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value); // You might adjust this regex based on your specific definition of special symbols

//   // Check all conditions
//   const isLengthValid = value.length >= 8;
//   const isPasswordValid =
//     hasUpperCase && hasLowerCase && hasNumber && hasSpecialSymbol;

//   return isLengthValid && isPasswordValid;
// }
const userSchema = new mongoose.Schema(
  {
    sUsername: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      lowercase: true,
      unique: true,
      match:{ regex: /^[a-zA-Z0-9]*$/, message: 'Username is not valid' },
      index: true,
      minlength:[5,"Username should be atleast 5 characters long"],
      maxlength:[25,"Username should be less than 25 characters"]
    },
    sEmail: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      match:{regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message:'Email is not valid'},
    },
    sPassword: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      match:{regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/, message:"Password is not valid"},
      minlength:[8,"Password should be atleast 8 characters long"],
      maxlength:[100,"Password "]
    },
    sFullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      match:{regex:/^[A-Za-z]+$/,message:"Name is not valid"} ,
    },
    sAvatar: {
      type: String, // Cloudinary url,
      required: [true, " Please provide with your avatar"],
      trim: true,
    },
    refreshToken:{
        type:String,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
