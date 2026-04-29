import { type Request, type  Response } from "express";
import { OAuth2Client } from "google-auth-library";
import { env } from "../config/env";
import { findOrCreateUser } from "../services/auth.service";
import { generateToken } from "../utils/token.util";
import { successResponse, errorResponse } from "../utils/apiResponse";


const client = new OAuth2Client(env.GOOGLE_CLIENT_ID);

export const googleAuth = async(req: Request , res : Response) => {
    try {
        const {token} = req.body ;

        if (!token) return errorResponse(res , "Token is required" , 400);

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: env.GOOGLE_CLIENT_ID
        });
        
    }
}