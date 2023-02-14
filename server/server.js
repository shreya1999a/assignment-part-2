const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

app.use(express.json());
app.use(cors());

app.disable('etag');


app.post(
  "/calc", async (req, res) => {
    const result = req.body.firstNumber + req.body.secondNumber;
    console.log("result:" + result)
    res.json({ result: result })
  }
);


app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});



app.listen(5000, () => { console.log("Server started: 5000") })