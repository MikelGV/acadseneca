import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
    const { email, name, message } = await request.json()

    const transport = nodemailer.createTransport({
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        cc: email,
        subject: `message from &{name} (&{email})`,
        text: message,
    };

    const sendMailPromise = () => {
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve("Email sent");
                } else {
                    reject(err.message);
                }
            });
        });

        try {
            sendMailPromise();
            return NextResponse.json({message: "Email sent"})
        } catch (err) {
            return NextResponse.json({error: err}, {status: 500});
        }
    }
}
