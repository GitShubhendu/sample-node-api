const express = require('express');
const app = express();
const port = 3000;

app.get('/welcome', (req,res) => {
    res.send( 'Welcome! Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})