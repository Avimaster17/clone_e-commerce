const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/numbers/:url1/:url2', async(req, res) => {
    let url1 = req.params.url1;
    let url2 = req.params.url2;
    const response = await axios.get(url1)
    res.send({
        ur1:response.data
    })

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})