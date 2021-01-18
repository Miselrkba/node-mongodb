const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db('mydb');
  const myObj = { name: 'My Company', address: 'Rk', country: 'Slovakia' };

  // dbo.createCollection("customers", function(err, res) {
  //   if (err) throw err;
  //   console.log("Collection created!");
  //   db.close();
  // });

  dbo.collection('customers').insertOne(myObj, function (err, res) {
    if (err) throw err;
    console.log('1 doc inserted');
    db.close();
  });
});
