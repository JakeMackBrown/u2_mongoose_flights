const db = require('../db');
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = [
        {
        name: "Hartsfield-Jackson Atlanta International Airport",
        location: "6000 N Terminal Pkwy Suite 4000, Atlanta, GA 30320",
        code: "ATL"
        },
        {
        name: "John F. Kennedy International Airport in New York",
        location: "Queens, NY 11430",
        code: "JFK"
        },
        {
        name: "Los Angeles International Airport",
        location: "1 World Way, Los Angeles, CA 90045",
        code: "LAX"
        },
        {
        name: "London Heathrow International Airport",
        location: "Hounslow, United Kingdom",
        code: "LHR"
        }
    ]
    await Airport.insertMany(airports)
    console.log('Created airports!')
}
    
    const run = async () => {
        await main()
        db.close()
    }
    
    run()