const express = require("express");
require("dotenv").config();
const app = express();
const CONNECTDB = require("./database/connect");
const ErrorHandler = require("./ErrorHandler/ErrorHandler");
const UserRoute = require("./routers/User");
const PORT = process.env.PORT || 8000;


//database connection method
CONNECTDB(process.env.MONGODB_URL);

app.use(express.json());

//routers
app.use('/api/user',UserRoute);

//errorhandler middleware
app.use(ErrorHandler);


//listening
app.listen(PORT,()=>{
    console.log("our server is running");
});
