'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { success: false, error: 'Missing fields' };
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'amalthilakan111@gmail.com',
            replyTo: email,
            subject: `Portfolio Contact from ${capitalizedName}`,
            text: `Name: ${capitalizedName}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff;">
                    <h2 style="color: #7C4DFF; text-align: center; margin-bottom: 30px;">New Contact Request</h2>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <p style="margin: 10px 0; font-size: 16px;">
                            <strong style="color: #333;">Name:</strong> 
                            <span style="color: #555;">${capitalizedName}</span>
                        </p>
                        <p style="margin: 10px 0; font-size: 16px;">
                            <strong style="color: #333;">Email:</strong> 
                            <a href="mailto:${email}" style="color: #7C4DFF; text-decoration: none;">${email}</a>
                        </p>
                    </div>

                    <div style="margin-top: 20px;">
                        <p style="font-size: 16px; font-weight: bold; color: #333; margin-bottom: 10px;">Message:</p>
                        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                    </div>

                    <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
                    
                    <p style="text-align: center; font-size: 12px; color: #999;">
                        Sent from your Portfolio Website
                    </p>
                </div>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'Failed to send email' };
    }
}
