
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGO_URI is not configured.");
    }

    await mongoose.connect(uri);

    console.log(
      `MongoDB connected — database: ${mongoose.connection.name}`
    );
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

module.exports = connectDB;
