import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;
const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://manpower:hE5vsK01D2dvkbgc@cluster0.4oskfev.mongodb.net/manpower?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connecting to mongodb using mongoose.");
    server = app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

// hE5vsK01D2dvkbgc
// manpower
