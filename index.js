const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/Logger');

const app = express();
const hbs = exphbs.create({/* config */})

//Init middleware
//app.use(logger);


//Body Parseer Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Homepate Routes
app.get('/', (req,res) => res.render('index', {
    title: 'Member App'
}));

//Handlebars Middleware
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Member API Routes
app.use('/api/members', require('./routes//api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));