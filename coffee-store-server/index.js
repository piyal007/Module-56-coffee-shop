const express = require("express");
const app = express();
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port = process.env.POST || 3000;

// Middleware
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tju8ptc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const coffeesCollections = client.db('coffeeDB').collection('coffees');

    app.get('/coffees', async(req, res) => {
      const cursor = coffeesCollections.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.post('/coffees', async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      const result = await coffeesCollections.insertOne(newCoffee);
      res.send(result);
    })

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close(); //This running server at once but we need to run it persistently
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
