const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb+srv://devanshchoudhary560:W4QS2Jb32uIwwajz@cluster0.yt75ic1.mongodb.net/";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj, owner :"684032354c6e7e62e3faf4d4"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};



initDB();