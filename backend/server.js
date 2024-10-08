const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRouter = require("./routes/authRoute")
const jobRouter = require("./routes/jobRoute")
const cors = require("cors");
const userRouter = require('./routes/userProfileData');
const employerProfile = require('./routes/employerProfile')

dotenv.config();
const app = express();
app.use(cors())
connectDB();
app.use(express.json());



app.get("/", (req, res) => {
  res.send("<h1> Welcome to backend </h1> ")
})

// Define Routes
app.use('/api/auth', authRouter);
app.use('/api/jobs', jobRouter);
app.use('/api/user/profile' , userRouter)
app.use('/api/employer/profile', employerProfile);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
