const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const collectionsRoutes = require('./routes/collections');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Mount the routes
app.use('/api/collections', collectionsRoutes); // Routes for collections

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor arrencat al port ${PORT}`);
});
