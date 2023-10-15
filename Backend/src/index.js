require("./database");
const app = require("./app");
require('dotenv').config();

app.listen(3700, (req, res)=>{
    console.log("Server on port:", 3700);
});