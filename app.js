const express = require('express');
const connectDB = require('./connect/dbConnect');
const userRoutes = require('./routes/routes');
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5000;
app.use(cors({
  origin: 'https://swyftclient.onrender.com',
}));

app.use(express.json());
app.use('/', userRoutes); 

  
connectDB(); 

app.listen(5000, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.status(200).json('hello Swyft is listening successfully');
});
