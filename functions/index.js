const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require("stripe")(
  "sk_test_51NukRBB87da2k8vSBPkmCLxT6D2WAYgTnsTV8m7y3gyPeViqzxRublhK4zfSmXsR67gVPJrt1hH2ZBUnCuQHCXXy00lzGj97NP"
);

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));
app.get('/evangadi', (request, response) => response.status(200).send('evangadi'));
app.post('/payments/create', async(req, res) =>{
const total = req.query.total;
console.log('payment Request Recieved for this amount >>>', total);
const paymentIntent = await stripe.paymentIntents.create({
    amount:total,
    currency:'usd',
});
res.status(201).send({
    clientSecret: paymentIntent.client_secret,
})
})
exports.api = functions.https.onRequest(app)


//http://127.0.0.1:5001/project-366ff/us-central1/api
//http://127.0.0.1:5001/project-366ff/us-central1/api