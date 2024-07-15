const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const warehouseRoutes = require('./routes/warehouseRoutes');
const sequelize = require('./config/db');

const app = express();

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/inventory',inventoryRoutes);
app.use('/api/warehouse',warehouseRoutes);

const PORT = 4000;

sequelize.sync()
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Server is running on PORT - ${PORT}`);
            });
        })
        .catch( (err) => {
            console.log("Database Connection Error\n", err);
        })