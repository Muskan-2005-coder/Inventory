// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const MONGO_URI =
//       process.env.MONGO_URI || "mongodb://127.0.0.1:27017/inventoryDB";
//     await mongoose.connect(MONGO_URI);
//     console.log("✅ MongoDB connected");
//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;



const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const MONGO_URI =
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/inventoryDB";
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
