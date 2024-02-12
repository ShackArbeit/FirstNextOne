import mongoose from 'mongoose';

let isConnected = false; // 追蹤連線的狀態

export const connectToDB = async () => {
      mongoose.set('strictQuery', true);
    
      if(isConnected) {
        console.log('MongoDB is already connected');
        return;
      }
    
      try {
        await mongoose.connect(process.env.MONGODB_URI, {
          dbName: "share_options",
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
    
        isConnected = true;
    
        console.log('MongoDB connected')
      } catch (error) {
        console.log(error);
      }
    }