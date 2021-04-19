const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('The Home Page')
})


const port = pprocess.env.port || 3000
app.listen(port, () => {
	console.log('Server is running')
})
