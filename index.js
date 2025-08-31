require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = 

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res) => {
    res.send('habhusjuuey68dbybsgtahw')

})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai or code </h1>')
})
app.get('/youtube',(req,res) =>{
    res.send("<h2> chai or code </h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
