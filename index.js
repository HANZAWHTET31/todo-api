const express = require("express");
const app = express();

const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient("mongodb://localhost");
const db = client.db("todo");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require("cors");
app.use(cors());

app.get("/tasks", async (req, res) => {
      const data = await db.collection("task").find().toArray();
      setTimeout(() => {
            res.json(data);
      }, 2500); 
})

app.get("/tasks/:id", async (req, res) => {
      const id = req.params;
      const data = await db.collection("task").findOne({_id: new ObjectId(id)});

      return res.json(data);
})

app.listen(8181, () => {
      console.log("API server running at port 8181");
});