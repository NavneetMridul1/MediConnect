import mongoose from 'mongoose';

export const dbConnection = () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error('MONGO_URI is not defined in environment variables.');
    return;
  }

  mongoose
    .connect(mongoUri, {
      dbName: 'MERN_STACK_MEDICONNECT',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to Database😊');
    })
    .catch((err) => {
      console.error('Some error occurred while connecting to database:', err);
    });
};
