import Twitter from 'twitter-lite';
import { getSession } from 'next-auth/client'
import { getToken } from 'next-auth/jwt';

// API endpoint for fetching user data from Twitter
export default async (req, res) => {
  const body = JSON.parse(req.body);
  const { name } = body;

   // Fetching token using NextAuth JWT
  const session = await getSession({ req });
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  });

  const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: token.twitter.accessToken,
    access_token_secret: token.twitter.refreshToken
  });

  try {
     // Fetching user data from Twitter
    const results = await client.get('/account/verify_credentials',{
        name: name
      });
    return res.status(200).json({
      status: 'Ok',
      data: results
    });
  } catch(e) {
    // Handling errors and returning status
    return res.status(400).json({
      status: e.message
    });
  }
}