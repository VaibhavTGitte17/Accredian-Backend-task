// src/controllers/contactController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const emailService = require('../Services/emailService');

async function submitContactForm(req, res) {
  try {
    const { name, email, phone, password, village } = req.body;

    // Validate input
    if (!name || !email || !phone || !password || !village) {
      return res.status(400).json({ error: 'Please fill in all fields.' });
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        password,
        village,
      },
    });

    // Send email notification
    await emailService.sendEmailNotification(email);

    res.status(200).json({ message: 'Form submitted successfully.', contact });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
}

module.exports = {
  submitContactForm,
};
