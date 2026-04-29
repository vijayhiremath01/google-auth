import { User, type IUser } from "../models/user.model";
import type {GooglePayload} from "../types/google.types";

export const findOrCreateUser = async (
    data: GooglePayload
): Promise<IUser> => {
    let user = await User.findOne({ email: data.email });

    if (!user) {
        user = await User.create({
            googleId: data.sub,
            name: data.name,
            email: data.email,
            picture: data.picture
        });
    }
    
    return user;
};