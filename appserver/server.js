const express = require('express');
const app = express();
const port = 5000;

const apiOneHandler = require('./controllers/api-one');
const apiTwoHandler = require('./controllers/api-two');
const apiThreeHandler = require('./controllers/api-three');

app.get('/api-one', apiOneHandler);

app.get('/api-two', apiTwoHandler);

app.get('/api-three', apiThreeHandler);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
