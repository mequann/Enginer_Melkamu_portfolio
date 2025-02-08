// app/api/sendEmail/route.ts

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Log the incoming request body for debugging
    const body = await req.json();
    console.log("Received body:", body);

    const { name, email, message } = body; // Destructure the body

    // Verify if the required data exists
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Set up Nodemailer transporter with hardcoded credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or any other service you're using
      auth: {
        user: 'your-email@gmail.com', // Your email address here
        pass: 'your-email-password', // Your email password here
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender's email
      to: 'ayalneh534@gmail.com', // Recipient email
      subject: `Message from ${name}`, // Subject of the email
      text: `You have a new message from ${name} (${email})\n\nMessage:\n${message}`, // Body of the email
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error:any) {
    // Handle any errors that occur
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: 'Error sending email', details: error.message }),
      { status: 500 }
    );
  }
}
