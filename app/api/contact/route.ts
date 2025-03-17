// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services like SendGrid, Mailgun, etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vinibregoli@gmail.com', // Your email address
      replyTo: email,
      subject: `Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
