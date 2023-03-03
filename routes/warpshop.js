const express = require('express')
const router = express.Router();
const Warpshop = require("../models/warpshop.model");

router.get("/preisvon/:preisvon", (req, res, next) => {
    const {preisvon, preisbis, category} = req.params;

    Warpshop.getProductsList(preisvon, preisbis, category, (err, products) =>{
        if(err){
            res.send("haha ein Fehler");
        }
        else{
            console.log(products);
        }
    })
});