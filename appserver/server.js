const express = require('express');
const app = express();
const port = 3000;

app.get('/api-one', (req, res) => {
	res.json({ responseMessage: 'Api one called!', responseCode: 200 });
});

app.get('/api-two', (req, res) => {
	res.json({ responseMessage: 'Api two called!', responseCode: 200 });
});

app.get('/api-three', (req, res) => {
	res.json({ responseMessage: 'Api three called!', responseCode: 200 });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});