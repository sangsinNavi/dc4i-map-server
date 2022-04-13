const http = require("http");
const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.get("", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

http.createServer(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`PORT : ${PORT}`);
});
