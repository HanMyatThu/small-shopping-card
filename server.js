if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}
const express = require('express')
const app = express();
const fs = require('fs')
const CORS = require('cors')
const port = process.env.PORT || 3001;


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))
 
app.get('/', (req,res) => {
  res.render('index.ejs');
})

// app.get('/store', async (req,res) => {
//   try{
//     const data = fs.readFile('items.json');
//     res.render('store.ejs', { items: JSON.parse(data) });
//   } catch(e) {
//     res.status(500).send(e);
//   }
// })

app.get('/store', function(req, res) {
  fs.readFile('items.json', function(error, data) {
    if (error) {
      res.status(500).end()
    } else {
      res.render('store.ejs', {
        items: JSON.parse(data)
      })
    }
  })
})

app.listen(port, () => {
  console.log('localhost is running in ' , port);
})