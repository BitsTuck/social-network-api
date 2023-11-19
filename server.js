const express = require('express');
const db = require('./config/connection')
const routes = require('./controllers')

const { Thought, User } = require('./models');

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(routes)

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
})


