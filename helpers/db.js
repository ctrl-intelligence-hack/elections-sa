const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log(`${MONGODB_URI} successfully connected`)
}).catch(error => {
    console.log(error)
})