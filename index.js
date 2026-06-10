const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

const DUFFEL_TOKEN = 'duffel_test_JkQ2KRAb78johbeuE-xB6feWFTCDcC1U8A5r1jrMCEf';

app.post('/api/search', async (req, res) => {
  try     const response = await fetch('https://api.duffel.com/air/offer_requests', {
      method: 'POST',
      headers: {
        'Authorization': ?Bearer${DUFFEL_TOKEN}?,
        'Content-Type': 'application/json',
        'Duffel-Version': 'v2'
      },
      body: JSON.stringify(req.body)
    });
  const data = await response.json();
    res.json(data);
  } catch (err) {
