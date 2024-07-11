const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(__dirname + '/home.html')
})

app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.sendFile(__dirname + '/about.html')
  })

  app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.sendFile(__dirname + '/contact.html')
  })

  app.get('/process',(req,res)=>{
    var no1 = req.query.txt1;
    var no2 = req.query.txt2;
    var c = parseInt(no1) + parseInt(no2)

    res.send('Sum is' + c)
  })

/*app.get('/about', (req, res) => {
    var a = 28;
    var b = 6;
    var c = a + b;
    res.send('A value is' + a + '<br/>B value is' + b + '<br/>Sum is' + c)
  })*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})