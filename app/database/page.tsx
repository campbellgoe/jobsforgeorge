import { MongoClient, ServerApiVersion } from 'mongodb'
// TODO: properly handle secrets ?
const DB_USER = process.env.DB_USER
const DB_PW = process.env.DB_PW
const uri = `mongodb+srv://${DB_USER}:${DB_PW}@cluster0.hwyl8ao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const cursor = await client.db("test").collection("greetings").find();
    const array = await cursor.toArray()
    return array;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
export default async function Database() {
  const greetings =  await run();
  return (<>
      {greetings.map(greetingObj=> <h1>{greetingObj.greeting}</h1>)}
  </>)
}