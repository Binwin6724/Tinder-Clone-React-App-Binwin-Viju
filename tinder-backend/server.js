import express from 'express'
import mongoose from 'mongoose'

import Cards from './dbCards.js'
import Cors from 'cors'

//App Config
const app = express()
const port = process.env.PORT || 8001

const connection_url = "mongodb+srv://admin:hCO6Wg1qvoM7iOmA@cluster0.695ut.mongodb.net/tinderdb?retryWrites=true&w=majority";

//Middlewares
app.use(express.json())
app.use(Cors())


//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//API Endpoint
app.get("/", (req, res) => res.status(200).send("Hey your port is working fine :)"));

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send("Sorry there is an error on post "+err);
        } else{
            res.status(201).send(data);
        }
    });
});

app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send("Sorry there is an error on get "+err)
        } else{
            res.status(200).send(data)
        }
    });
});

//Listner
app.listen(port, () => console.log(`listning on localhost: ${port}`));
