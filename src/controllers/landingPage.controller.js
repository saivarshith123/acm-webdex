const express = require("express");
const SmallCase = require("../models/smallcase.model.js");
const router = express.Router();

router.get("/", async function (req, res) {
    const smallData = await SmallCase.find({}).lean().exec();
    const isUserLoggedIn = !!req.cookies.userId;
    res.render("index", {
        smallData,
        isUserLoggedIn
    });
});

module.exports = router;