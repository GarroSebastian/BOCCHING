const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/Bocching')
.then(db => console.log("DB is connected", 3700))
.catch(err => console.log(err));