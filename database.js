const { MongoClient } = require('mongodb');

const url =
"mongodb+srv://NamsteDev:Jq1SmzWOzDSeaKFn@2352.tvswwbz.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  const data={
    "name":"nethul",
    "age":"23"
  };
const insertResult = await collection.insertMany([data]);
console.log('Inserted documents =>', insertResult);

  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

const countResult = await collection.countDocuments({});
console.log("Count of Documents in the user collection =>",countResult);

const result = await collection.find({"name":"nethul"}).toArray();
console.log("result =>",result) ;


return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());