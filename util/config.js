
const emailSetup = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'ayuntamientosde@gmail.com', // generated ethereal user
        pass: 'ayuntamientopassword' // generated ethereal password
    }
};

module.exports = {
    emailSetup: emailSetup
};