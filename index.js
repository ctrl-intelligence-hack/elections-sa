const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 5000;
const organisationRoutes = require('./routes/organisations.routes');
const municipalitiesRoutes = require('./routes/municipalities.routes');
const nationalRoutes = require('./routes/national.routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.use('/v1/municipalities', municipalitiesRoutes);
app.use('/v1/organisations', organisationRoutes);
app.use('/v1/national', nationalRoutes);

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`)
})