const nodemailer = require('nodemailer');
const config = require('../util/config');
const axios = require('axios');

const EmailSenderService = {

    sendEmail: (emailContent) => {
        'use strict';

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport(config.emailSetup);

        // setup email data with unicode symbols
        let mailOptions = {
            from: 'Devcore site contact', // sender address
            to: 'yarielinfante@gmail.com', // list of receivers
            subject: 'Client interest', // Subject line
            text: emailContent, // plain text body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        
        });
    },

    sendMessageNotification: (content) => {
        const messageNotification = {
            to: '/topics/staff',
            notification: {
                title: 'Client interested',
                body: content,
                sound: 'default',
                content_available: true,
            },
            data: {
                id: ''
            }
        };

        axios.post('https://messages.json', messageNotification)
            .then(res => {

                console.log('notificatio sent : ' + res.statusText);
            })
            .catch(error => {
                console.log(error);
            });
    }
};


module.exports = EmailSenderService;