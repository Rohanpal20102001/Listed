require("dotenv").config();
module.exports = {
  port: process.env.PORT || 8080,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
  mailPassword: process.env.MAIL_PASSWORD,
  user: process.env.MAIL_USER,
};
