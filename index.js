if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

require('./helpers/db');

const PORT = process.env.PORT || 5000;
const organisationRoutes = require('./routes/organisations.routes');
const municipalElectionsRoutes = require('./routes/municipalElections.routes');
const provincialElectionsRoutes = require('./routes/provincialElections.routes');
const generalElectionsRoutes = require('./routes/generalElections.routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.use('/v1/organisations', organisationRoutes);
app.use('/v1/municipalElections', municipalElectionsRoutes);
app.use('/v1/generalElections', generalElectionsRoutes);
app.use('/v1/provincialElections', provincialElectionsRoutes);

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`)
})