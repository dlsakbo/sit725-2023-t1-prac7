const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://akbosithira7:tkWNln8HVpnZPRfa@cluster0.li1zpwo.mongodb.net/?retryWrites=true&w=majority";



const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();


module.exports = client;