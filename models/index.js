const mongoose = require('mongoose')
const AirportSchema = require('./airport')
const FlightSchema = require('./flight')

const Airport = mongoose.model('Airport', AirportSchema)
const Flight = mongoose.model('Flight', FlightSchema)

module.exports = {
  Airport,
  Flight
}