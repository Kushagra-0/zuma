const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

const connectToMongo = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
};
connectToMongo();

module.exports = connectToMongo;

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.listen(8800,()=>{
    console.log("Backend server is running");
});