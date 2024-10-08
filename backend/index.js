import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./Database/DbConfig.js";

import userRoutes from "./Routers/user.router.js"
import tourRoutes from "./Routers/tour.router.js"
import bookingRoutes from "./Routers/booking.router.js"


// Configure dotenv to load environment variables from a .env file
dotenv.config();

// Create an Express application instance
const app = express();

app.use(cors()); // Use CORS middleware to allow cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

app.use("/api/user", userRoutes); // Define a route for user-related operations
app.use("/api/tour", tourRoutes);
app.use("/api/booking", bookingRoutes);


connectDB(('mongodb+srv://arumugam:arumugam@cluster0.vibhai6.mongodb.net/')); // Establish connection to the database


// Start the server and listen on the port specified in the environment variable
app.listen(process.env.PORT, () => {
    console.log("App is listening on PORT", process.env.PORT);
})