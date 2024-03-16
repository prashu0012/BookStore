import express from 'express'
import bodyParser from 'body-parser';
import Router from './routes/routes.js'
import Connect from './db.js';
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

const app=express()
app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',Router)

// serving the front-end
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "./frontend/dist")))
app.get("*", function (_, res) {
    res.sendFile(path.join(__dirname, "./frontend/dist/index.html"), function (err) {
        res.status(500).send(err)
    })
})

dotenv.config()
const port=process.env.PORT
const url=process.env.url
Connect(url)
.then(()=>app.listen(port,()=>console.log(`listening at ${port}`))),(error=>console.log("Error: ",error))
