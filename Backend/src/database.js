const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect('mongodb://127.0.0.1:27017/Bocching')
.then(db => console.log("DB is connected"))
.catch(err => console.log(err));