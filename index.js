// import express
const express = require('express')

// create server
const app = express()
// handler function
function onRequest () {
  console.log('testing...')
}
//______________________________________________________________________________________________________________
//HTML exercises
const page  =`<html> <head> <h1> Welcome </h1> <head>`;

// register GET /hello endpoint
app.get(
  '/',   // route to listen on
  (request,response) =>{
    
  response.send(message) // callback runs when the route is requested
  }
)

//Welcome a user______________________________________________________________________________________________________________
const message = name => `<html> <head> <h1> Welcome  ${name}</h1> <head>`;

app.get(
  '/user/:name',   // route to listen on
  (request,response) =>{
    
  response.send(message(request.params.name)) // callback runs when the route is requested
  }
)




// 3000 is common
const port = 3000

// confirmation function
function onListen () {
  console.log(`Listening on :${port}`)
  
}

// start listening
app.listen(
  port, // TCP port where the server listens
  onListen(), // callback runs when server starts
)

