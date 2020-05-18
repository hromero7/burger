const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data){
        const hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    console.log(req);
    // burger.insertOne("burger_name", [req.body.burger_name], function(result){
    //     res.redirect("/");
    //     res.json(result);
    // });
});






module.exports = router;