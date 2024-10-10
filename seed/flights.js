const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => { 
    const atlantaAirport = await Airport.findOne({ departingAirport: 'Hartsfield-Jackson Atlanta International Airport' })
    const jeffersonAirport = await Airport.findOne({ departingAirport: 'John F. Kennedy International Airport in New York' })
    const losAngelesAirport = await Airport.findOne({ departingAirport: 'Los Angeles International Airport' })
    const londonAirport = await Airport.findOne({ departingAirport: 'London Heathrow International Airport' })


const flights = [
    {
      airline: 'Delta Airlines',
      flight_number: 1234,
      price: 450,
      numberOfSeats: 120,
      departingAirport: atlantaAirport,
      departure_date_and_time: new Date('2024-10-15T08:30:00Z')
    },
    {
      airline: 'American Airlines',
      flight_number: 5678,
      price: 390,
      numberOfSeats: 150,
      departingAirport: jeffersonAirport,
      departure_date_and_time: new Date('2024-10-16T14:45:00Z')
    },
    {
      airline: 'British Airways',
      flight_number: 2345,
      price: 780,
      numberOfSeats: 180,
      departingAirport: londonAirport,
      departure_date_and_time: new Date('2024-10-17T10:20:00Z')
    },
    {
      airline: 'United Airlines',
      flight_number: 6789,
      price: 420,
      numberOfSeats: 110,
      departingAirport: losAngelesAirport,
      departure_date_and_time: new Date('2024-10-18T09:15:00Z')
    },
    {
      airline: 'Virgin Atlantic',
      flight_number: 9876,
      price: 820,
      numberOfSeats: 160,
      departingAirport: londonAirport,
      departure_date_and_time: new Date('2024-10-19T18:00:00Z')
    },
    {
      airline: 'Southwest Airlines',
      flight_number: 5432,
      price: 350,
      numberOfSeats: 130,
      departingAirport: atlantaAirport,
      departure_date_and_time: new Date('2024-10-20T11:55:00Z')
    },
    {
      airline: 'JetBlue',
      flight_number: 8765,
      price: 410,
      numberOfSeats: 140,
      departingAirport: jeffersonAirport,
      departure_date_and_time: new Date('2024-10-21T07:10:00Z')
    }
  ]

  await Flight.insertMany(flights)
  console.log('Created airport with flights!')
}

const run = async () => {
    await main()
    db.close()
}

run()