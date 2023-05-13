const express = require('express');
const path = require('path');
const logger = require('./middleware/Logger');

const app = express();

//Init middleware
//app.use(logger);

//Body Parseer Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Member API Routes
app.use('/api/members', require('./routes//api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));