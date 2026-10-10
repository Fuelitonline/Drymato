import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, lastName, email, phoneNumber, companyName, message } = body;

        // 1. Basic validation
        if (!name || !lastName || !email || !phoneNumber || !companyName || !message) {
            return NextResponse.json(
                { success: false, error: "All fields are required." },
                { status: 400 }
            );
        }

        // 2. Check if SMTP configuration exists
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const contactReceiver = process.env.CONTACT_RECEIVER_EMAIL;

        if (!smtpHost || !smtpUser || !smtpPass || !contactReceiver) {
            console.error("Nodemailer configuration is missing in environment variables.");
            return NextResponse.json(
                {
                    success: false,
                    error: "Email server configuration is incomplete on the server. Please check environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_RECEIVER_EMAIL)."
                },
                { status: 500 }
            );
        }

        // 3. Create SMTP Transporter
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: parseInt(smtpPort || "587"),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: smtpUser,
                pass: smtpPass
            }
        });

        // 4. Construct Email Message
        const mailOptions = {
            from: `"${name} ${lastName}" <${email}>`, // Customer's name and filled email address
            to: contactReceiver, // Receiver email address (always filled from CONTACT_RECEIVER_EMAIL)
            replyTo: email, // Direct replies go to client's email
            subject: `Drymato Inquiry from ${name} ${lastName} (${companyName})`,
            text: `
Drymato Contact Inquiry:
-----------------------
Name: ${name} ${lastName}
Email: ${email}
Phone: ${phoneNumber}
Company: ${companyName}

Message:
${message}
            `,
            html: `
<table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fff9f5; width: 100%; min-width: 100%; margin: 0; padding: 20px 10px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;">
  <tr>
    <td align="center">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(165, 8, 8, 0.05); border: 1px solid #f6f0ea; margin: 0 auto;">
        <!-- HEADER -->
        <tr>
          <td align="center" style="background: linear-gradient(135deg, #a50808 0%, #c9181f 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-family: 'Georgia', serif; font-size: 26px; font-weight: 800; letter-spacing: 0.5px; text-align: center;">New Customer Inquiry</h1>
            <p style="color: #ffcccc; margin: 5px 0 0 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; text-align: center;">Drymato Website Contact Form</p>
          </td>
        </tr>
        <!-- BODY -->
        <tr>
          <td style="padding: 30px 20px;">
            <p style="font-size: 16px; line-height: 1.6; color: #4a3e3d; margin-top: 0;">Hello Drymato Team,</p>
            <p style="font-size: 15px; line-height: 1.6; color: #6e5e5d;">A customer has submitted an inquiry on the website. Here are the details:</p>
            
            <!-- DETAILS TABLE -->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 25px 0; font-size: 14px; border-collapse: collapse; width: 100%;">
              <tr style="background-color: #fffcf9;">
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: bold; color: #a50808; width: 35%;">Customer Name</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; color: #332d2c; font-weight: 600;">${name} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: bold; color: #a50808;">Email Address</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #a50808; text-decoration: none; border-bottom: 1px dashed #a50808;">${email}</a>
                </td>
              </tr>
              <tr style="background-color: #fffcf9;">
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: bold; color: #a50808;">Phone Number</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; color: #332d2c; font-weight: 600;">${phoneNumber}</td>
              </tr>
              <tr>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: bold; color: #a50808;">Company Name</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; color: #332d2c; font-weight: 600;">${companyName}</td>
              </tr>
            </table>
            
            <!-- MESSAGE BOX -->
            <div style="background-color: #fff9f5; border-left: 4px solid #a50808; border-radius: 8px; padding: 20px; margin: 25px 0; box-shadow: inset 0 1px 3px rgba(165,8,8,0.02);">
              <strong style="color: #a50808; display: block; margin-bottom: 10px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message Details:</strong>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #332d2c; font-style: italic;">
                ${message.replace(/\n/g, '<br/>')}
              </p>
            </div>
    
            <!-- REPLY BUTTON -->
            <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin-top: 30px; margin-left: auto; margin-right: auto;">
              <tr>
                <td align="center" style="background-color: #a50808; border-radius: 30px;">
                  <a href="mailto:${email}" style="display: inline-block; padding: 14px 35px; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Reply to Customer</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- FOOTER -->
        <tr>
          <td align="center" style="background-color: #faf6f2; padding: 30px; text-align: center; font-size: 12px; color: #a29190; border-top: 1px solid #f3ebe1;">
            <img src="https://drymato.com/drymato-logo.png" alt="Drymato Logo" style="height: 45px; width: auto; margin-bottom: 15px; display: block; margin-left: auto; margin-right: auto;" />
            <p style="margin: 0 0 8px 0; line-height: 1.5; text-align: center;">This automated email was sent from the contact form on your website.</p>
            <p style="margin: 0; font-weight: bold; color: #8e7a79; text-align: center;">&copy; ${new Date().getFullYear()} Drymato. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
            `
        };

        // 5. Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error in contact POST handler: ", error);
        return NextResponse.json(
            { success: false, error: error.message || "An error occurred while sending email." },
            { status: 500 }
        );
    }
}
