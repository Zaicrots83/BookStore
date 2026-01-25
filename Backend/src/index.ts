import "dotenv/config";
import express from "express"
import {check} from '../src/Database/connection'

const app = express();

const port = 3000;

check();

app.listen(port,()=>{
    console.log("Im working on port 3000")
});

