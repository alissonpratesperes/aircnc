const Booking = require('../models/Booking');

const { store } = require("./SessionController");

module.exports = {

    async store(req, res) {

        const { booking_id } = req.params;

        const booking = await Booking.findById(booking_id).populate('spot');

            booking.approved = false;

                await booking.save();

                    return res.json(booking);

    }

};