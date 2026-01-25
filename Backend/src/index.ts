import "dotenv/config";
import express from "express"
import {check} from '../src/Database/connection'
import Book_router from "../src/routes/books"
import User_router from "../src/routes/users"

const app = express();
const port = 3000;
app.use(express.json()); //This is required to work with json
app.use("/API",Book_router)
app.use("/API",User_router)
check();

app.listen(port,()=>{
    console.log("Im working on port 3000")
});

