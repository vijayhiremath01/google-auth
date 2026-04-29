import * as mongoose from "mongoose";
import {env} from "./env.ts";

export const connectDB = async (): Promise<void> =>  {
     try {                 
        await mongoose.connect(env.MONGO_URI);
        console.log("MongoDb connected ! ✅");
     } catch (e) {
         console.log("MongoDb not connected ❌")
            }
}