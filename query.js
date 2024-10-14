const db = require('./db');
const { Airport, Flight } = require('./models'); 

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Function to display all flights with their airport details
const listFlights = async () => {
    const flights = await Flight.find().populate('departingAirport'); // Populate the departingAirport field
    flights.forEach(flight => {
        console.log(`Airline: ${flight.airline}, Airport: ${flight.departingAirport.name}, Flight No: ${flight.flight_number}, Departure: ${flight.departure_date_and_time.toLocaleString()}`)
    })
}

// Function to get flight details by ID
const getFlightById = async (id) => {
    const flight = await Flight.findById(id).populate('departingAirport');
    if (flight) {
        console.log(`Airline: ${flight.airline}, Airport: ${flight.departingAirport.name}, Flight No: ${flight.flight_number}, Departure: ${flight.departure_date_and_time.toLocaleString()}`)
    } else {
        console.log('Flight not found');
    }
}

// Function to create a new flight
const createFlight = async (airline, flight_number, price, numberOfSeats, departingAirportId, departure_date_and_time) => {
    const flight = new Flight({
        airline,
        flight_number,
        price,
        numberOfSeats,
        departingAirport: departingAirportId,
        departure_date_and_time
    });
    await flight.save();
    console.log('Flight created:', flight);
}

// Function to update an existing flight
const updateFlight = async (id, updateData) => {
    const flight = await Flight.findByIdAndUpdate(id, updateData, { new: true })
    if (flight) {
        console.log('Flight updated:', flight)
    } else {
        console.log('Flight not found')
    }
}

// Function to delete a flight
const deleteFlight = async (id) => {
    const result = await Flight.findByIdAndDelete(id)
    if (result) {
        console.log('Flight deleted')
    } else {
        console.log('Flight not found')
    }
}

// Function to create a new airport
const createAirport = async (name, location, code) => {
    const airport = new Airport({ name, location, code })
    await airport.save()
    console.log('Airport created:', airport)
}

// Function to update an existing airport
const updateAirport = async (id, updateData) => {
    const airport = await Airport.findByIdAndUpdate(id, updateData, { new: true })
    if (airport) {
        console.log('Airport updated:', airport)
    } else {
        console.log('Airport not found')
    }
}

// Function to delete an airport
const deleteAirport = async (id) => {
    const result = await Airport.findByIdAndDelete(id)
    if (result) {
        console.log('Airport deleted')
    } else {
        console.log('Airport not found')
    }
}

// Example usage
(async () => {
    await listFlights()
    // await createFlight(...); // Use actual data to create a flight
    // await getFlightById('flightId'); // Replace with actual flight ID
    // await updateFlight('flightId', { price: 500 }); // Replace with actual flight ID and new data
    // await deleteFlight('flightId'); // Replace with actual flight ID
    // await createAirport(...); // Use actual data to create an airport
    // await updateAirport('airportId', { name: 'New Airport Name' }); // Replace with actual airport ID and new data
    // await deleteAirport('airportId'); // Replace with actual airport ID
    
    db.close() // Close the database connection when done
})()
