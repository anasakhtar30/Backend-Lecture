
//Incuding express module and initialising an app
const express = require('express')
const app = express()
//variable that stores the port number
const port  = 3000

app.get('/', (req,res) =>{
    res.send('This is Anas this side')
})



//start your app or server
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    
})

