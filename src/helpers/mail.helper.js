const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

const myOAuth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
)

myOAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
})

const myAccessToken = myOAuth2Client.getAccessToken()

exports.transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'fazzfullstack@gmail.com', // your gmail account you used to set the project up in google cloud console"
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: myAccessToken // access token variable we defined earlier
  }
})

exports.mailOptions = (sendTo, code) => {
  return {
    from: 'fazzfullstack@gmail.com', // sender
    to: sendTo, // receiver
    subject: 'Fazz Fullstack Reset Password', // Subject
    html: `<p>Here is your reset password code <b>${code}</b></p>`// html body
  }
}
