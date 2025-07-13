import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }

    // Get email credentials from environment variables
    const emailUser = process.env.EMAIL_USER || 'garghemant654@gmail.com';
    const emailPass = process.env.EMAIL_PASS || 'koktjekphbrlojuj';
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'singlaraghav200@gmail.com';

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // Email content
    const emailBody = `
New message from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from your portfolio contact form.
    `;

    // Email options
    const mailOptions = {
      from: `"${name}" <${emailUser}>`,
      to: recipientEmail,
      subject: `Portfolio Contact: ${subject}`,
      text: emailBody,
      replyTo: email // Allow direct reply to sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.'
    });
  }
} 