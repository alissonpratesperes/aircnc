const Booking = require('../models/Booking');

    module.exports = {
        async store(request, response) {
            const { booking_id } = request.params;
            const booking = await Booking.findById(booking_id).populate('spot');

                booking.approved = false;

                    await booking.save();

                        const bookingUserSocket = request.connectedUsers[booking.user];

                            if(bookingUserSocket) { request.io.to(bookingUserSocket).emit('booking_response', booking); }

                                return response.json(booking);
        }
    };