import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class EmailSenderService implements CodeSender {
  private readonly transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP_HOST,
      port: +process.env.EMAIL_SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_SMTP_USER,
        pass: process.env.EMAIL_SMTP_PASS,
      },
    });
  }
  
  async sendCode(code: string, destination: string): Promise<void> {
    const result = await this.transporter.sendMail({
      from: `"2FA Service" <${process.env.EMAIL_SMTP_USER}>`, // sender address
      to: destination, // list of receivers
      subject: "Here is your 2FA Code", // Subject line
      text: "Here is your 2FA Code", // plain text body
      html: `<b>${code}</b>`, // html body
    })
  }

}