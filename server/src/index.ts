import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";

/* configs */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* route imports */
app.use("/dashboard", dashboardRoutes); //localhost:8000/dashboard
app.use("/products", productRoutes); //localhost:8000/products
app.use("/users", userRoutes); //localhost:8000/users
app.use("/expenses", expenseRoutes); //localhost:8000/expenses

//SERVER
const port = process.env.port || 3001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


