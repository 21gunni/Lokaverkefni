const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    //res.send('Hello World');
    res.render('index', {
        title: 'Test frá app.js yfir í index.ejs'
    });
});

// Error if website path does not exist
app.use((req, res, next) => {
    const err = new Error('Síða fannst ekki!');
    err.status = 404;
    next(err);
});


app.listen(3000, function(){
    console.log('Server started on port 3000');
});