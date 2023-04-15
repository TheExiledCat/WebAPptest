const express = require('express')
const https = require('https');
const { parse } = require('path');
const app = express()
const port = 3000;
app.use(express.json());
let randomNames=[];
app.get('/', (req, res) => {
  let data = req.body;
  console.log(req.query);
  console.log(data);
  res.send("I Love " + (req.query.name?req.query.name:"Everyone"));
  res.end();
})
 app.get('/:id', async (req, res) => {
 let data="";
       await https.get(`https://randomuser.me/api/`+"?results="+req.params['id'], resp => {
      
  
      // A chunk of data has been recieved.
      resp.on("data", chunk => {
        data += chunk;
      });
  
      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        randomNames=[];
        for(let i =0; i <JSON.parse(data).results.length;i++){
          randomNames.push(JSON.parse(data).results[i].name.first);

        }
        
         res.send(randomNames);
         
      });
    })
    .on("error", err => {
      console.log("Error: " + err.message);
    });
    

 
    console.log(randomNames)
  
  }
  )
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
