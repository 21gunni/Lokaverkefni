const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const foodMock = require('./foodMock');

const app = express();

// Variables for json objects
app.locals.nova = require('./nova.json');

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// Testing double loops for nova


// Dummy nova food

const foodNova = [
    {
        name: 'Hressó',
        location: 'Austurstræti 20',
        dates: 'mán-fös',
        time: '11:30-14:00'
    },
    {
        name: 'Hamborgarafabrikkan',
        location: 'Höfðatorg, Kringlan, Akureyri',
        dates: 'Alla daga',
        time: '11:30-17:00'
    },
    {
        name: 'Eldsmiðjan',
        location: 'Bragagata 38A',
        dates: 'mán, þrið',
        time: '11:00-17:00'
    }
]

// Dummy Siminn food
const foodSiminn = [
    {
        name: 'Arna Ís og Kaffibat',
        location: 'Eiðistorgi 15',
        dates: 'fimt, föst',
        time: '17:00-21:00'
    },
    {
        name: 'Bombay Bazaar',
        location: 'Ármúla 23',
        dates: 'fimt, föst',
        time: '11:30-14:00'
    },
    {
        name: 'Burro',
        location: 'Veltusund 1',
        dates: 'fimt, föst',
        time: '17:00-23:00'
    },
]

// Dummy 2f1 food
const food2f1 = [
    {
        name: 'Kopar',
        location: 'Geirsgata 3',
        dates: 'mán-mið',
        time: '17:00-21:00'
    },
    {
        name: 'Le Kock',
        location: 'Ármúli 42',
        dates: 'mán-sun',
        time: '15:00-17:00'
    },
    {
        name: 'Nat Kitchen',
        location: 'Laugavegur 85',
        dates: 'mán-sun',
        time: '17:00-21:00'
    },
]

// Dummy vodafone food
const foodVodafone = [
    {
        name: '17 sortir',
        location: 'Grandagarður 19',
        dates: 'mán-sun',
        time: '10:00-18:00'
    },
    {
        name: 'Bambus',
        location: 'Borgartún 16',
        dates: 'mán-sun',
        time: '15:00-17:00'
    },
    {
        name: 'Nings',
        location: 'Hlíðasmára 12',
        dates: 'mán-sun',
        time: '15:00-22:00'
    },

]

// Routes
app.get('/', (req, res) => {
    //res.send('Hello World');
    res.render('index', {
        foodNova: foodNova,
        foodSiminn: foodSiminn,
        food2f1: food2f1,
        foodVodafone: foodVodafone
    });
});

// Error if website path does not exist
//app.use((req, res, next) => {
    //const err = new Error('Síða fannst ekki!');
    //err.status = 404;
    //next(err);
//});


app.listen(3000, function(){
    console.log('Server started on port 3000');
});