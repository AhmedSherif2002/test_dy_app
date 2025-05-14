// app.js
const express = require('express');
const app = express();
const port = process.env.PORT | 5000;
console.log("version image")
let isReady = false;
let isAlive = true;
// setTimeout(()=>{
//   isReady = true;
//   setTimeout(()=>{
//     isAlive = false;
//   }, 60000) // not alive after a minute since ready.
// }, 20000); // Ready After 20 seconds
  
app.get("/ready", (req, res)=>{
  if(isReady)
    res.status(200).send("Ready");
  else res.status(500).send("Not ready yet!");
})

app.get("/alive", (req, res)=>{
  console.log("probed, status: ", isAlive?"alive":"dead");
  if(isAlive)
    res.status(200).send("I am Alive!");
  else res.status(400).send("I am not alive.");
})

// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// setTimeout(()=>{
//   throw new Error("Time's up")
// }, 30000);

app.get("/log/:id", (req, res)=>{
  const id = req.params.id;
  console.log(`logging: ${id}`);
  if(id == 4){
    throw new Error("Error")
  }
  res.send("logged");
})

app.get("/count", (req, res)=> {
  count();
  res.status(200).send("1");
})

function count(){
  console.log("Counting...")
  for(let i=0;i<100000000;i++){}
}

// Start the server
app.listen(port, () => {
  console.log("abcde");
  console.log(`Server running at http://localhost:${port}`);
});

