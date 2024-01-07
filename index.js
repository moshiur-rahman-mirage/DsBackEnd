import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import kpiRoutes from "./routes/kpi.js";
import productsRoute from "./routes/product.js";
import {products} from "./data/data.js"
import Product from "./models/Product.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors({
  origin: [
      'http://localhost:5173',
      'https://findashboard-830d9.web.app/',     
      "*"

  ],
  credentials: true
}));

// Routes
app.use("/kpi", kpiRoutes);
app.use("/product",productsRoute);
console.log("Hello");

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL,{ dbName: process.env.DB_NAME },{ useNewUrlParser: true, useUnifiedTopology: true, writeConcern: { w: "majority" } })
  .then(async () => {
    
    // await mongoose.connection.db.dropDatabase();
    // await Product.insertMany(products);

    // Start the server
    app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
  })
  .catch((error) => console.error(`${error} did not connect.`));
