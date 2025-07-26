import mongoose from 'mongoose';

export const dbConnection = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error('❌ MONGO_URI is not defined in environment variables.');
    return;
  }

  try {
    mongoose.set('bufferCommands', false); // disable buffering

    await mongoose.connect(mongoUri, {
      dbName: 'MERN_STACK_MEDICONNECT',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ Connected to MongoDB successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
    process.exit(1); // optional: stop server if DB is not connected
  }
};
