import express, {Request, Response} from 'express';
import db from "../src/db";


const PORT = process.env.PORT || 3001;
// App
const app = express();

app.get("/",(req, res) => {
    res.send("hai")
})

app.listen(PORT,()=>{
    db.runMigrations();
    console.log("listen")
});

