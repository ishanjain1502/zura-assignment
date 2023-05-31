const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("error", (err) => {
      console.log("err", err);
    });

    mongoose.connection.on("connected", (err, res) => {
      console.log("DB Connection establish");
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;