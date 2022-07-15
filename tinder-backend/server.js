import express from 'express';
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors"


// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:9w5ANtJEX7X2awqp@cluster0.fvxhhbu.mongodb.net/tinderDb?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json());
app.use(Cors())

// DB Config
mongoose.connect(connection_url, {
    
    // console.log('Connected to MongoDb Successfully')
}).then(() => console.log("Database connected!"))
    .catch(err => console.log(err));


// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello Clever Programmer!!!"));

app.post('/tinder/cards', (req, res) => {

    const dbCard = req.body;
    try {
        Cards.create(dbCard, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(data);
                // console.log("data saved")
            }
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

    // try {
    //     const { name, description, tag } = req.body;
    //     const note = new Note({
    //         title, description, tag, user: req.user.id
    //     });
    //     const savedNote = await note.save();
    //     res.json(savedNote);
    // } catch (error) {
    //     console.error(error.message);
    //     res.status(500).send("Internal server error");
    // }
})

app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));