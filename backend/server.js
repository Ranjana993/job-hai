const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRouter = require("./routes/authRoute")
const jobRouter = require("./routes/jobRoute")


dotenv.config();
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', authRouter);
app.use('/api/jobs', jobRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
