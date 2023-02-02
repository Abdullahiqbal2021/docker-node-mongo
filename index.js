const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({
    "Id": "1",
    "Name": "Abdullah Iqbal" 
  })
});


const port = 3000;

app.listen(port, () => console.log('Server running...'));
