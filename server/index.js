
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://Tanvesh:1234@cluster0.h0exz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL , {useNewUrlParser:true,useUnifiedTopology:true , 'useFindAndModify':false})
    .then(()=> app.listen(PORT , ()=>console.log(`Connected to MongoDB : ${PORT}`)))
    .catch((error)=>console.log(error.message))

