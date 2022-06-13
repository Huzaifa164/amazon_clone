const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51L9kNjSDE8KYTCyi8ugfn8Q0fOeBgIydx0zSX9xeNmmhUgH3eJSrseuiNtUTTAXQX41NGqo8jOkF0OUZptY4MP0J00dNmv7RkD')

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.get('/huzaifa', (request, response) => response.status(200).send('WHATS UP HUZAIFA'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd"
    })

    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-4f722/us-central1/api