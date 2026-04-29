import jwt from "jsonwebtoken";
import {type IUser} from "../models/user.model.ts";
import { env } from "../config/env";

export const generateToken = (user : IUser) : String => {
    return jwt.sign(
        {
            id : user._id,
            email : user.email
        } ,
        env.JWT_SECRET ,
         {expiresIn : "7d"}
    )
}