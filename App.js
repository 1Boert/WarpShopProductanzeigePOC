const express = require('express');
const app = express();
const PORT = 8080;
const antonia = require("./routes/warpshop")
//app.use(express.static('public'));




// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});



app.listen(PORT, () => {
    console.log("ick bin auf port" + PORT);
});

const Warpshop = require("./models/warpshop.model");
app.use(express.urlencoded());
app.post('/getParams', function (req, res, next) {
    const preisvon = req.body.preisvon;
    const preisbis = req.body.preisbis;
    const category = req.body.category;
    const result = Warpshop.getProductsList(preisvon, preisbis, category, (err, products) => {
        if(err){
            return "fehler";
        }
        else{
            return products;
        }
    });
    res.render('pages/index', {preisvon: "10"});
});