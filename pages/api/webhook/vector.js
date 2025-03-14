const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@vector-webhook.sl7ti.mongodb.net/?retryWrites=true&w=majority&appName=vector-webhook`;       

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const database = client.db('vector');
const collection = database.collection('barros-engineer-visitors');

let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) return;
  await client.connect();
  isConnected = true;
}

export default async function handler(req, res) {
  const payload = req.body;
  console.log('Vector Webhook received:', JSON.stringify(payload));

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

    await collection.insertOne({payload, createdAt: new Date()});
    // await client.close();
    
    res.status(200).json({ message: 'ok' });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ message: 'Error processing webhook' });
  }
} 
