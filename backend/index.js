// app.js
const express = require('express');
const app = express();
const port = process.env.PORT | 5000;

const repoUrl = "https://github.com/AhmedSherif2002/data.git";
console.log("repo: ", repoUrl?.replace("https://github.com/",""))
// A basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

setTimeout(()=>{
  throw new Error("Time's up")
}, 30000);

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
