async function sendMail() {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'stateoffluxapp@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });
        const user = req.user.firstName.slice(0, 1).toUpperCase() + req.user.firstName.slice(1);
        const planId = req.params.id;
        const email = req.body.email;
        const mailOptions = {
            from: 'FLUX ☀️🌴 <stateoffluxapp@gmail.com>',
            to: email,
            subject: `${user} wants to go on a trip with you ✈️`,
            text: `${user} has invited you to join their travel plan on Flux. Please join the plan at https://state-of-flux.herokuapp.com/#/${planId}.`,
            html: `<head> <style>\
                            <link
  href="https://fonts.googleapis.com/css2?family=Anton&family=Lato&family=Lobster&family=Montserrat&family=Open+Sans&family=Roboto&display=swap"
  rel="stylesheet">\
                             .link {color: red;}  \
                             Style goes in here <----\
                             .logo {font-family: anton}\
                             p {color: blue}\
                             p {font-size: 16px}\
                             a {background-color: black}\
                             a {color: white}\
                             </style> </head>\
                    <div class='background'>\
                    <h1 class='logo'>flux</h1>\
                    <p>Hi friend,</p>\
                    <br>\
                    <p>${user} has invited you to join their travel plan on Flux. Flux helps you to get on the same page using smart organizing and polling to plan the perfect getaway.</p>\
                    <br>\
                    <p>Follow the below link to see ${user}’s travel plan and start discussing the details of your upcoming trip.</p>\
                    <br>\
                    <a href=https://state-of-flux.herokuapp.com/#/${planId}>Click to view plan</a>\
                    <br>\
                    <p>Have a wonderful trip :)</p>\
                    <p>The Flux team</p>\
                    <br>\
                    `
        };

        const result = await transport.sendMail(mailOptions);

        return result;

    } catch (error) {
        return error;
    }