// Imports
const express = require('express');
const app = express(); // Create instance of Express
const axios = require('axios')

/* Create Home and other Routes */
app.get('/', function(req,res){
    res.send('Hello World')
})
app.get('/sei',function(req,res){
    res.send('This is an SEI412 lesson for Express')
})
app.get('/rockets',(req,res)=>{
    axios.get('https://api.spacexdata.com/v3/rockets')
    .then(response => { //function(response)
        console.log(response.data);
        // res.send('Rockets') 
        res.json(response.data)
    })
    .catch(err =>{
        console.log(err)
    })
})



/* Port Listener */
const PORT = process.env.PORT || 8000; //In production OR locally on 8000
    app.listen(PORT, function(){
        console.log(`Server listening on ${PORT}`)
    })

/* app.listen(8000, function(){
    console.log('Server is available at http://localhost:8000. Press CTRL+C To quit this server.')
}) */
