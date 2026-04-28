import mongoose, {Document, Schema , Model} from "mongoose";

export interface IUser extends Document {
    googleId: string;
    name: string;
    email: string;
    picture: string;
}

const UserSchema : Schema<IUser> = new Schema(
    {
        googleId: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        picture: { type: String }
    },
    { timestamps: true }
);

export const User: Model<IUser> = mongoose.model<IUser>("User" , UserSchema);