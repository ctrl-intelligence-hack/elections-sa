const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const municipalRoutes = require('./routes/municipal.routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`Server listening to ${PORT}`)
})

app.use('/2016/municipals', municipalRoutes);

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`)
})