const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require('./config/common').mongoURI;
const users = require("./controller/users");
const orderbook = require("./controller/orderBook");

const router = express.Router();

mongoose
    .connect(db,{ useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => {
        console.log('===================== Database Connection Error ======================\n');
        console('DateTime : '+new Date()+'\n\n\r');
        console.log('Exception : '+err.toString()+'\n\n\r');
    });
//console.log("Type of:",typeof users);
//console.log();
app.use("/api/users", users);
app.use("/api/orders", orderbook);
// app.use("/api/orderbook", orderbook);

const port = process.env.PORT || 2000;

process.on('uncaughtException', function (err) {
  
    console.log('===================== Uncaught Exception Error ======================\n');
    console.log('DateTime : '+new Date()+'\n\n\r');
    console.log('Exception : '+err.toString()+'\n\n\r');
});

app.listen(port, () => console.log(`Server running on port ${port}`));