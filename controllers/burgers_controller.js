const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data){
        const hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.put("/api/burger/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    burger.updateOne(["devoured = true"], condition, function(result) {
        res.status(200).end();
    });
})






module.exports = router;