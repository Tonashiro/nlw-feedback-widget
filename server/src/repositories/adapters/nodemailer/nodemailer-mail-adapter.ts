import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e02d6ba0c688bc",
        pass: "57534d729cfa87"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Vinicius Tonashiro <vinit.tonashiro@hotmail.com>",
            to: "Vinicius Tonashiro <vinit.tonashiro@hotmail.com>",
            subject,
            html: body
        })
    }
}