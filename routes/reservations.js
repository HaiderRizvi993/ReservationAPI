var express = require("express");
var router = express.Router();
var Reservation = require("../models/reservation");
/* GET home page. */
router.get("/", async function(req, res, next) {
    let reservations = await Reservation.find();
    //console.log(products);
    res.render("reservations/list", { title: "Room Booking", reservations });
});
router.get("/add", async function(req, res, next) {
    res.render("reservations/add");
});
// store data in db
router.post("/add", async function(req, res, next) {
    let reservation = new Reservation(req.body);
    await reservation.save();
    res.redirect("/reservations");
});
router.get("/delete/:id", async function(req, res, next) {
    let reservation = await Reservation.findByIdAndDelete(req.params.id);
    res.redirect("/reservations");
});
router.get("/edit/:id", async function(req, res, next) {
    let reservation = await Reservation.findById(req.params.id);
    res.render("reservations/edit", { reservation });
});
router.post("/edit/:id", async function(req, res, next) {
    let reservation = await Reservation.findById(req.params.id);
    reservation.name = req.body.name;
    reservation.days = req.body.days;
    reservation.contact_number = req.body.contact_number;
    reservation.date = req.body.date;
    await reservation.save();
    res.redirect("/reservations");
});

module.exports = router;