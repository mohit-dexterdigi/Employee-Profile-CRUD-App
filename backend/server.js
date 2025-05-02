const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoutes = require('./routes/employee.routes');

mongoose.connect("mongodb+srv://mohitdexterdigi007:mohitdd007@employee-crud.a2hplvl.mongodb.net/")
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());    
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use('/api/employees', employeeRoutes);


app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
