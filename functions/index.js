const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require("stripe")(
  "pk_test_51NukRBB87da2k8vS8bUbzFQTJZWrNYqRJClqwRqEQqLmZNGFu02TGBOoUxeK5zVHw9OXfc8LSomLexbJ28qZBS9O00Km8s2Fmo"
);

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));
app.get('/evangadi', (request, response) => response.status(200).send('evangadi'));
app.post('/payments/create', async(require, response) =>{
const total = request.query.total;
console.log('payment Request Recieved for this amount >>>', total);
const paymentIntent = await stripe.paymentIntents.create({
    amount:total,
    currency:'usd',
});
response.status(201).send({
    clientSecret: paymentIntent.client_secret,
})
})
exports.api = functions.https.onRequest(app)


//http://127.0.0.1:5001/project-366ff/us-central1/api
//http://127.0.0.1:5001/project-366ff/us-central1/api