import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { email, name, message, html } = req.body;

  if (!email || !name || (!message && !html)) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Configure the SMTP transport using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL, // Your Gmail account email address
      pass: process.env.MY_PASSWORD, // Your Gmail App Password or Gmail password (if less secure apps enabled)
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        cc: email,
        subject: `message from ${name} (${email})`,
        text: message,
        html,
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
