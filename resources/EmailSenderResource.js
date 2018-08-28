const Router = require('express-promise-router');
const EmailSenderService = require('../services/EmailSenderService');
const router = new Router();

router.post('/api/mail-sender', async (req, res) => {

    let email = {
        name: '',
        emailAddress: '',
        message: ''
    };

    email = req.body;
    console.log(email);

    let emailContent = 'name : '
        .concat(email.name)
        .concat('\n')
        .concat('email address : ')
        .concat(email.emailAddress)
        .concat('\n')
        .concat('message : ')
        .concat(email.message);

    EmailSenderService.sendEmail(emailContent);

    EmailSenderService.sendMessageNotification(emailContent);

    res.send();
});


module.exports = router;