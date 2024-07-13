const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/mongodb');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({
    limit: '50mb'
}));
connectDatabase();

// app.use("/api/v1/user", require("./routes/auth"));
// app.use("/api/v1/org", require("./routes/organization"));
// app.use("/api/v1/template", require("./routes/template"));
// app.use("/api/v1/event", require("./routes/event"));
// app.use("/api/v1/csv", upload, require("./routes/csv"));
// app.use("/api/v1/dashboard", require("./routes/dashboard"));
// app.use("/api/v1/certificate", require("./routes/certificate"));

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;