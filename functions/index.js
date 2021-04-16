/* eslint-disable object-curly-spacing */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line max-len
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { config } = require("firebase-functions");
const { RouterSharp } = require("@material-ui/icons");
// eslint-disable-next-line max-len
const stripe = require("stripe")(
  "sk_test_51IgkSECL4dLf4dW88bNCS6U3Ce1H3lRRinUnWd4crrSJzO57vxgDeegesbOJfuj1PUmjJ6urM69LQOgBZJRnTBuR00qclDzYSR"
);

// eslint-disable-next-line no-trailing-spaces
// for api
const app = express();

// app config

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// api routes

app.get("/", (request, response) => response.status(200).send("hello world"));
// localhost:5001/ecommerce-c7cd1/us-central1/api

app.post("/payments/create", async (request, response) => {});

// listen command

exports.api = functions.https.onRequest(app);

// https://www.youtube.com/watch?v=RDV3Z1KCBvo&t=25099s
// Error on this page need help
