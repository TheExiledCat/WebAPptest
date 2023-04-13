const express = require('express')
const https = require('https')
const app = express()
const port = 3000;
app.use(express.json());
let randomName="";
app.get('/', (req, res) => {
  let data = req.body;
  console.log(req.query);
  console.log(data);
  res.send("I Love " + req.query.name);
  res.end();
})
 app.get('/:id', (req, res) => {
  res.send(randomName);
cycle() 
  res.end();
})
async function cycle()
{
  await https
  .get(`https://randomuser.me/api/`, resp => {
    let data = "";

    // A chunk of data has been recieved.
    resp.on("data", chunk => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      let url = JSON.parse(data).message;
      randomName=JSON.parse(data).results[0].name.first
    });
  })
  .on("error", err => {
    console.log("Error: " + err.message);
  });
}
cycle()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
