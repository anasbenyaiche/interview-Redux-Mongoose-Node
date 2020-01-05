const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const userRoute = require('./routes/user')
const galleryRoute = require('./routes/Gallery');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

app.use('/gallery', galleryRoute);

app.use('/user', userRoute);

const PORT = process.env.PORT || 4000;


const dbURL = 'mongodb://localhost:27017/interview'

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log('Error connecting to: ' + dbURL)
    }
    else {
        console.log('Connected to: ' + dbURL)
    }
})

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});

