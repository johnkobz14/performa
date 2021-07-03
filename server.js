const express = require("express");
const dotenv = require("dotenv");
// const pool = require("./config/db"); 

const app = express();

// Init Middleware
app.use(express.json());

dotenv.config({path: "./config/config.env"});

const users = require("./routes/users");

app.use("/api/pmp/users", users);


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));