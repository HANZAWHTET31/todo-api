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