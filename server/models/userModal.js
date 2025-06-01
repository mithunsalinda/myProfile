import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: { type: String, required: true },
    salutation: { type: String, enum: ['Mr.', 'Mrs.', 'Ms.'], default: '' },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    address: { type: String, default: '' },
    country: { type: String, default: '' },
    postalCode: { type: String, default: '' },
    dob: { type: Date }, 
    gender: { type: String, enum: ['', 'Male', 'Female', 'Other'], default: '' },
    maritalStatus: { type: String, enum: ['', 'Single', 'Married'], default: '' },
    verifyOtp: { type: String, default: '' },
    verifyOtpExpireAt: { type: Number, default: 0 },
    isVerified: { type: Boolean, default: false },
    resetOtp: { type: String, default: '' },
    resetOtpExpireAt: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const userModel = mongoose.models.User || mongoose.model('User', userSchema);
export default userModel;
