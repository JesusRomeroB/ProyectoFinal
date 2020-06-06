
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// create express server
const app = express();
const port = process.env.PORT || 5000;

// MIddleware and allow us to us json
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

app.use('/products', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});