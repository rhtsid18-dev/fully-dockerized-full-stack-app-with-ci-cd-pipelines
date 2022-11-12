const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const apiOneHandler = require('./controllers/api-one');
const apiTwoHandler = require('./controllers/api-two');
const apiThreeHandler = require('./controllers/api-three');

app.use(cors({
	origin: [
		'http://localhost:3000'
	]
}));

app.get('/api-one', apiOneHandler);

app.get('/api-two', apiTwoHandler);

app.get('/api-three', apiThreeHandler);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
