const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/mongodb');

const app = express();
const port = 4000;

connectDatabase();

app
    .use(cors({
        "origin": "*",
      }))
    .use(express.json({
        limit: "50mb"
    }))
    .use(express.urlencoded({ extended: true }))
    .get('/', (_, res) => {
        res.json({ message: 'Hello World!' });
    })
    .use("/api/v1", require("./routes/index.routes.js"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;