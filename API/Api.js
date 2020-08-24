const express = require('express');
const axios = require("axios");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());    

//Api edamam
const APP_ID = "48bdf095";
const APP_KEY = "e0b88c0b6a2d2bfa77a4a76e73297e6e";


//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/receipts/:ingredient", async function (req, res)  {
    let url = (`https://test-es.edamam.com/search?q="${req.params.ingredient}"&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const result = await axios.get(url)
    res.send(result.data.hits)        
})
 

app.listen(3000)