// const mongoose = require('mongoose');

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(process.env.MONGODB_URI, opts)
//       .then((mongoose) => {
//         return mongoose;
//       });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// module.exports = dbConnect;


const mongoose = require('mongoose');

let isConnected;

const dbConnect = async () => {
  if (isConnected) {
    return;
  }

  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error('MongoDB URI is not defined in environment variables.');
  }

  const db = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  isConnected = db.connections[0].readyState === 1;
  console.log('Connected to MongoDB Atlas');
};

module.exports = dbConnect;
