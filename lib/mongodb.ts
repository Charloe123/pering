import mongoose from "mongoose";

const MONGODB_URL= "mongodb+srv://charlottencube233_db_user:vCtuddEbISPL0itv@cluster0.pahu2zm.mongodb.net/Pering?retryWrites=true&w=majority&appName=Cluster0"

  

if (!MONGODB_URL) {
  throw new Error("MongoDB URI is not defined");
}


declare global {
 
  var _mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}


global._mongoose = global._mongoose || { conn: null, promise: null };

async function connectToDB() {
  if (global._mongoose.conn) {
    return global._mongoose.conn;
  }

  if (!global._mongoose.promise) {
    global._mongoose.promise = mongoose
      .connect(MONGODB_URL)
      .then((mongoose) => mongoose)
      .catch((err) => {
        console.error("MongoDB connection error:", err);
        throw err;
      });
  }

  global._mongoose.conn = await global._mongoose.promise;
  return global._mongoose.conn;
}

export default connectToDB;
