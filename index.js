const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/search', async (req, res) => {
  try {
    const response = await fetch('https://api.duffel.com/air/offer_requests', {
      method: 'POST',
      headers: {
        'Authorization': ?Bearer ${process.env.DUFFEL_TOKEN}?,
        'Content-Type': 'application/json',
        'Duffel-Version': 'v2'
   },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).j{ error: err.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('VOY proxy running');
});
