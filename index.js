const express = require('express')
const app = express()
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  let data = req.body;
  console.log( req.query);
  console.log(data);
  res.send("IT WORKED\n"+JSON.stringify(data));
  res.end();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})