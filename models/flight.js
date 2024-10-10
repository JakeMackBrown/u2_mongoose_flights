const { Schema } = require('mongoose')

const Flight = new Schema(
    {
        airline: {type: String, required: true},
        flight_number: {type: Number, required: true},
        price: {type: Number, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: {type: Schema.Types.ObjectId, ref: 'Airport', required: true},
        departure_date_and_time: {type: Date, required: true}
    }
)

module.exports = Flight