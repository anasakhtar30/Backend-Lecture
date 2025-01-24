const express = require('express')
const app = express()
const port = 3000

//Loading middleware into the app
//inbuilt middleware
app.use(express.json());

// middleware - logging , auth, validation
// These middleware is create above GET HTTP method

// // Creation of Middleware
// const loggingMiddleware = function(req,res,next){
//     console.log('Logging krra hu');
//     next();
// }
// // Loading middlware into application
// app.use(loggingMiddleware);

// const authMiddleware  = function(req,res,next){
//     console.log('Authentication krra hu');
//     res.send("chalo seedha ghar")
//      next();
// }

// app.use(authMiddleware);

// const validationMiddleware = function(req,res,next){
//     console.log('Validation kar rha hu');
//     next();
// }

// app.use(validationMiddleware)


const route = require('./Routes/route')
//Mountng the route
app.use('/api',route);

// ->/api/student
// ->/api/admin


app.get('/',(req,res) =>{
    console.log("Main router handler hu");
    
    console.log(req.body)
    res.send('Got a GET request from server')
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
    
})