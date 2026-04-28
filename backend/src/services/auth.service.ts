import { User, IUser } from "../models/user.model";

interface GooglePayload {
    sub: string;
    email: string;
    name: string;
    picture: string;
}

export const findOrCreateUser = async (
    googleData: GooglePayload
): Promise<IUser> => {
    let user = await User.findOne({ email: googleData.email });

    if (!user) {
        user = await User.create({
            googleId: googleData.sub,
            name: googleData.name,
            email: googleData.email,
            picture: googleData.picture
        });
    }

    return user;
};