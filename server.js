'use strict';

const express = require('express');
const app = express();

 const error404 = require('./handlers/404');
 const error500 = require('./handlers/500')

app.get('/' , (req,res) => {
    res.status(200).send(' HELLO WORLD!');
})

app.get('/data', (req,res) => {
let result = {
    name : 'Maram',
    age : 24,
    major : 'Business Administration'
}
res.status(200).json(result);
})

app.get('/badConnection' , (req,res,next) => {
    next('Internal Server Error');
})

app.use('*', error404);
app.use(error500);

function start(port){
    app.listen(port , ()=> console.log(`server started on port :${process.env.PORT}`)
    )
}
module.exports ={
    start, 
    app
}