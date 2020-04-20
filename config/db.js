const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MnogoDB Connected');
  } catch (err) {
    console.log(`MongoDB Connection Failed: ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
