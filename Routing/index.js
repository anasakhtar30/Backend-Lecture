const express = require('express')
const app = express()
const port = 3000


//import kiya item file ko router file me
const item = require('./routes/item')
const birds = require('./routes/birds')

app.use('/api',item)
app.use('/filler',birds)


//-> /api/ -> item home page
//-> /api/items -> item post request
//-> /api/items/d ->put/delete request


app.listen(port, () => {
  console.log(`Babbar app listening on port ${port}`)
})