const express = require('express');
const port = 1005;
const app = express();

// Redirect all to index.js inside routes directory
app.use('/', require('./routes'));

// Setting view engine as ejs
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));


app.listen(port, function(err){
    if(err){
        console.log("Error Occurred while trying to run server on port : ", port);
        return;
    }
    console.log("Running on port:",port);
});