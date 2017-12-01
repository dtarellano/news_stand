import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

const db = mongoose.connection;

db.on('error', (error) => {
  console.log('connection error : ', error);
});

db.once('open', () => {
  console.log('connection to mongoDb open');
});

export default db;
