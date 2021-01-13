const { store } = require("./SessionController");
const Booking = require('../models/Booking');

    module.exports = {
        async store(request, response) {
            const { user_id } = request.headers;
            const { spot_id } = request.params;
            const { date } = request.body;
            const booking = await Booking.create({
                user: user_id,
                spot: spot_id,
                date
            });

                await booking.populate('spot').populate('user').execPopulate();

                    const ownerSocket = request.connectedUsers[booking.spot.user];

                        if(ownerSocket) { request.io.to(ownerSocket).emit('booking_request', booking); }

                            return response.json(booking);
        }
    }