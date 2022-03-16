const express = require("express");
const cors = require("cors");
const { createMollieClient } = require('@mollie/api-client');
const mollieClient = createMollieClient({ apiKey: 'test_xQgqTpM2bpkkbSf6Gw8yFeVx68DeJm' });

const port = process.env.PORT || 3000


if (process.env.NODE_ENV !== "production") {

  require("dotenv").config()

}

const app = express();
// const mollieClient = createMollieClient({
//   apiKey: "test_xQgqTpM2bpkkbSf6Gw8yFeVx68DeJm"
// });

const domainsFromEnv = process.env.CORS_DOMAINS || ""


const whitelist = domainsFromEnv.split(",").map(item => item.trim())

const corsOptions = {

  origin: function (origin, callback) {

    if (!origin || whitelist.indexOf(origin) !== -1) {

      callback(null, true)

    } else {

      callback(new Error("Not allowed by CORS"))

    }

  },

  credentials: true,

}

app.use(cors(corsOptions))

app.get("/payments", (req, res) => {
  const orderId = new Date().getTime();

  const payment = mollieClient.payments
    .create({
      amount: { value: "4.00", currency: "EUR" },
      method: ['bancontact', 'belfius', 'ideal' , 'applepay' , 'banktransfer' , 'creditcard' , 'directdebit' , 'eps' , 'giftcard' , 'giropay' , 'kbc' , 'mybank' , 'paypal' , 'paysafecard' , 'przelewy24' , 'sofort'],
      locale:'nl_NL',
      description: "New payment",
      redirectUrl: `http://localhost:3001/order`,
      webhookUrl: `http://localhost:3000/webhook?id=${orderId}`,
      metadata: { orderId }
    })
    .then(payment => {
      // Redirect the consumer to complete the payment using `payment.getPaymentUrl()`.
      res.redirect(payment.getPaymentUrl());
    })
    .catch(error => {
      // Do some proper error handling.
      res.send(error);
    },[]);
});

app.post("/webhook", (req, res) => {

  mollieClient.payments
    .get(req.body.id)
    .then(payment => {
      if (payment.isPaid()) {
        // Hooray, you've received a payment! You can start shipping to the consumer.
      } else if (!payment.isOpen()) {
        // The payment isn't paid and has expired. We can assume it was aborted.
      }
      res.send(payment.status);
    })
    .catch(error => {
      // Do some proper error handling.
      res.send(error);
    });
});

app.listen(3000, () => console.log("Server is listening on port 3000."));
