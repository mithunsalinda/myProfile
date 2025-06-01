import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

//API END POINTS
app.get('/', (req, res) => res.send("API Working 1"));

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter);
app.listen(port, () => console.log(`Server started on PORT ${port}`));
 