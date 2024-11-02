import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { sendMailOption } from 'src/auth/interfaces_and_types/sendMailOption.type';

// Load environment variables
dotenv.config();

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      // host: 'smtp.your-email-provider.com', // Replace with your SMTP provider
      // port: 587, // Usually 587 for TLS
      secure: false, // Use true for 465, false for other ports
      auth: {
        user: `${process.env.EMAIL_USERNAME}`,
        pass: `${process.env.EMAIL_PASSWORD}`,
      },
      service: 'Gmail',
    });
  }

  async sendMail(data: sendMailOption) {
    const mailOptions = {
      from: 'Nailit',
      to: data.to,
      subject: data.subject,
      message: data.message,
      html: data.html,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      return info;
    } catch (error) {
      console.error(`Error sending email: ${error}`);
      throw error;
    }
  }
}
