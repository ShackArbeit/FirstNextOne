import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// 這裡是 import 在 MongoDb 資料庫 User 模型 的 Component 設定
import User from '@/models/user';
// 這裡是 import 連接 MongoDb 資料庫的 Component 設定
import { connectToDB } from '@/utils/database';



const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
async session({ session }) {
//   確保能夠抓到每一次登入的使用者的狀態
//   將 Session Id 儲存在資料庫內
   const sessionUser = await User.findOne({ email: session.user.email });
    session.user.id = sessionUser._id.toString();

    return session;
},
    async signIn({ account, profile, user, credentials }) {
      try {
            await connectToDB();
    
            // 確認使用者模型是否已經建立與否
            const userExists = await User.findOne({ email: profile.email });
    
            // 如果未建立就建立新的使用者模型
            if (!userExists) {
              await User.create({
                email: profile.email,
                username: profile.name.replace(" ", "").toLowerCase(),
                image: profile.picture,
              });
            }
            return true
          } catch (error) {
            console.log("Error checking if user exists: ", error.message);
            return false
          }
    },
    }}
)

export { handler as GET, handler as POST }