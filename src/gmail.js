// import { gmail } from 'googleapis/build/src/apis/gmail';

// var nodemailer = require('nodemailer');
// var { google } = require('googleapis');
// const keys = require('../../config/keys');
// const CLIENT_ID = require('../config/keys').google_client_id;
// const CLIENT_SECRET = require('../config/keys').google_client_secret;
// const REDIRECT_URI = require('../config/keys').google_redirect_uri;
// const REFRESH_TOKEN = require('../config/keys').google_refresh_token;

// const oAuth2Client = new google.auth.OAuth2(
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
// );

// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// async function sendMail() {
//     try {
//         const accessToken = await oAuth2Client.getAccessToken();

//         const transport = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: 'hello.michelleroos@gmail.com',
//                 clientId: CLIENT_ID,
//                 clientSecret: CLIENT_SECRET,
//                 refreshToken: REFRESH_TOKEN,
//                 accessToken: accessToken,
//             },
//         });

//         const user = req.user.firstName.slice(0, 1).toUpperCase() + req.user.firstName.slice(1);
//         const planId = req.params.id;
//         const email = req.body.email;

//         const mailOptions = {
//             from: 'JS project <hello.michelleroos@gmail.com>',
//             to: 'hello.michelleroos@gmail.com',
//             subject: `Recipe`,
//             text: `Sharing the recipe here.`,
//             html: ``
//         };

//         const result = await transport.sendMail(mailOptions);

//         return result;

//     } catch (error) {
//         return error;
//     }
// }

// sendMail().then(result => console.log('email sent', result))
//     .catch(error => console.log(error.message));

// export default gmail;