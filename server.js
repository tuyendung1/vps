const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://heliiooo0202_db_user:2qLR29owIWeDjYiy@cluster0.vblwmml.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	//	'user':   'root',
	//	'pass':   '',
		'dbName': 'PlayGame', // red
		//'autoIndex':       false,
}
);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
