import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Weather App!');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
