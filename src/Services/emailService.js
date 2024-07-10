// src/services/emailService.js

const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Function to send email notification
async function sendEmailNotification(email) {
  try {
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for contacting us!',
      text: 'We have received your message and will get back to you shortly.',
    });
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = {
  sendEmailNotification,
};
