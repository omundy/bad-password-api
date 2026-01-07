// route.js - Add endpoints to the API

//////////////////////////////////////
////////////// INIT //////////////////
//////////////////////////////////////

// import express, create router
import express from 'express';
const router = express.Router();

// import data for the API
import { data, functions } from "./data.js";
// console.log("data.pets", data.pets);


//////////////////////////////////////
////////////// ROUTES ////////////////
//////////////////////////////////////

// 👉 add routes here (from Chapter 9 wiki) ...
router.get("/api", async function (req, res) {
    res.send({ message: "Hello 🔥" });
});
router.get("/api/common", async function (req, res) {
    res.send({ message: randomFromArray(data.common) });
});
router.get("/api/custom", async function (req, res) {
    console.log(`params = ${req.query.params}`);
    res.send({ message: returnPassword(req.query.params) });
});
// 👈

export default router;



function returnPassword(params) {
    let str = "";
    // group 1
    if (params.includes("endearments")) {
        str += randomFromArray(data.endearments);
    }
    if (params.includes("pets")) {
        str += randomFromArray(data.pets);
    }
    if (params.includes("cities")) {
        str += randomFromArray(data.cities);
    }
    // group 2
    if (params.includes("colors")) {
        str += randomFromArray(data.colors);
    }
    if (params.includes("dates")) {
        str += functions.randomYear();
    }
    if (params.includes("patterns")) {
        str += randomFromArray(data.patterns);
    }
    return str;
}

function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
