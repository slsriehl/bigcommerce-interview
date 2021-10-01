const express = require('express');
const ngrok = require('ngrok')
const app = express();
const PORT = 3000; //forwarded

// when there's a post request to /webhooks...
app.post('/webhooks', (req, res) => {
    // respond with 200 OK
    return res.status(200).send('Hello World!');
});

app.post('/', (req, res) => {
    // return res.redirect('/webhooks');
    // return res.status(200).send('Hello Underworld!');
    return res.status(301).send('Try /webhooks');
});

// listen to port 3000
app.listen(PORT, () => {
    console.log(`Listening for webhooks on port ${PORT}`);

    // start ngrok and create a tunnel to port 3000

    const open = async () => {
        return await ngrok.connect(PORT);
    }

    return open();
})