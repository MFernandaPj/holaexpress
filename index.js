const express = require('express')

const app = express()

app.get('/', (request, response) => {
     response.send('Hola mundo de Express')
})

/**
 * 
 * 
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000/
app.listen(3000, () => (
     console.log('listening on part 3000')
))