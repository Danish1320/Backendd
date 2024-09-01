// importing express
const express = require('express');
const UserRouter = require('./routers/userrouter');
const cors = require('cors');

// initializing express
const app = express();
const port = 5000;

// middleware

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use('/user', UserRouter);

// route or endpoint
app.get('/', (req, res) => {
    res.send('Response from express');
});

app.get('/add', (req, res) => {
    res.send('Response from add');
});

// getall
// update

app.listen(port, () => { console.log('server started') });

// request method

// get- used to read data from server
// post - to add data on server-(basic level)
// delete - to update data
// put - to delete data
