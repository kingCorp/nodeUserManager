const mongoose = require('mongoose')

mongoose.Promise = global.Promise
var mongodbUri ='mongodb://@ds131676.mlab.com:31676/ebank';
mongoose.connect(mongodbUri, {
 // useNewUrlParser: true,

  useMongoClient: true
})
var conn = mongoose.connection;    
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', () =>{
 console.log('connected to a database')                       
});