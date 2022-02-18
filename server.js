const express = require("express");
const dbConnection = require("./config/connection");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

dbConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
