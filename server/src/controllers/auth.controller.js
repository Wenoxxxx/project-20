const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.verifyGoogleToken = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    res.json({
      success: true,
      user: {
        email,
        name,
        picture,
        role: email.endsWith('@project20.com') ? 'admin' : 'user'
      }
    });
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};
