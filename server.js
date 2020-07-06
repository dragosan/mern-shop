const express = require('express');

const app = express();

const connectDB = require('./config/db');

connectDB();
app.use(express.json({ extended: false }));


const Product = require('./models/Product');

//Routes
app.use("/api/users", require("./routes/api/user"));
app.use('/api/products',require("./routes/api/product"));

const port =  5000;
app.listen(port ,()=>console.log(`Server started at port ${port}`));