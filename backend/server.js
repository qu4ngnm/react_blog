const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("express");
const cors = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//bring routes
const blogRoutes = require("./routes/blog.js")
const authRoutes = require("./routes/auth.js")
//db
mongoose
  .connect(process.env.DATABASE, {
  })
  .then(() => {
    console.log("Database connected");
  });

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes moddileware

app.use('/api',blogRoutes);
app.use('/api',authRoutes);

//Ports

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
