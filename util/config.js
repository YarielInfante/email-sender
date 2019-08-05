
const emailSetup = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: '', // generated ethereal user
        pass: '' // generated ethereal password
    }
};

module.exports = {
    emailSetup: emailSetup
};