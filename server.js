const express = require("express");
const dotenv = require("dotenv");

const app = express();

// Init Middleware
app.use(express.json());

dotenv.config({ path: "./config/.env.development.local" });

const users = require("./routes/users");
const framework = require("./routes/framework");

app.use("/api/pmp/users", users);
app.use("/api/pmp/framework", framework);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
