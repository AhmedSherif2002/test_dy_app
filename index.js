// app.js
const express = require('express');
const app = express();
const port = 5000;

// A basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get("/log/:id", (req, res)=>{
  const id = req.params.id;
  console.log(`logging: ${id}`);
  res.send("logged");
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
