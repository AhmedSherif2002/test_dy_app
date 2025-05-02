// app.js
const express = require('express');
const app = express();
const port = process.env.PORT | 5000;
console.log("vvvv22222")
let isReady = false;
let isAlive = true;
setTimeout(()=>{
  isReady = true;
  setTimeout(()=>{
    isAlive = false;
  }, 100000) // not alive after a minute since ready.
}, 20000); // Ready After 50 seconds

app.get("/ready", (req, res)=>{
  if(isReady)
    res.status(200).send("Ready");
  else res.status(500).send("Not ready yet!");
})

app.get("/alive", (req, res)=>{
  if(isAlive)
    res.status(200).send("I am Alive!");
  else res.status(400).send("I am not alive.");
})

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

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



// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

