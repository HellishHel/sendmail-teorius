import { Request, Response, NextFunction } from 'express';
const nodeMailer = require('nodemailer');

class MailController {
    async send(req: Request, res: Response, next: NextFunction) {
        try {
            const transporter = nodeMailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            });

            const { to } = req.body;

            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: 'Тестовое сообщение 1',
                text: '',
                html:
                    `
                    <div>
                        <h1>Тестовое сообщение 1</h1>
                    </div>
                `,
            });

            return res.json({
                message: 'Сообщение отправлено',
            });
        } catch (e) {
            console.error(e);
            next(e);
        }
    }
}

export default new MailController();
