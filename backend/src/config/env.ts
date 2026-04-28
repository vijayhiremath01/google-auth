import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
    PORT: z.string(),
    MONGO_URI: z.string(),
    JWT_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    NODE_ENV: z.string()
});

export const env = envSchema.parse(process.env);