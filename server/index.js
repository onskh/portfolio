const express = require("express");
const itemRoutes = require('./routes/item.routes')

var items = require('./database-mysql');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});