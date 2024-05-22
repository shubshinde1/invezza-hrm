const express = require("express");
const app = express();
app.use(express.json());

require("./db/connection");
const Employee = require("./models/Employee");

app.post("/", async (req, res) => {
  let employee = new Employee(req.body);
  let result = await employee.save();
  res.send(result);
});

app.listen(4000);
