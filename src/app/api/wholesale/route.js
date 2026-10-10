import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const body = await request.json();
        const {
            fullName,
            companyName,
            gstNumber,
            email,
            phone,
            productInterest,
            estimatedVolume,
            packagingFormat,
            message
        } = body;

        // 1. Basic validation
        if (!fullName || !companyName || !email || !phone) {
            return NextResponse.json(
                { success: false, error: "Required fields (Name, Company, Email, Phone) are missing." },
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
            from: `"${fullName} (${companyName})" <${email}>`,
            to: contactReceiver,
            replyTo: email,
            subject: `🔥 New Drymato Wholesale B2B Inquiry from ${companyName}`,
            text: `
Drymato Wholesale B2B Quote Inquiry:
------------------------------------
Full Name: ${fullName}
Company Name: ${companyName}
GST / Tax ID: ${gstNumber || "N/A"}
Email Address: ${email}
Phone / WhatsApp: ${phone}
Product Interest: ${productInterest || "N/A"}
Monthly Volume: ${estimatedVolume || "N/A"}
Packaging Requirement: ${packagingFormat || "N/A"}

Specific Requirements:
${message || "None specified."}
            `,
            html: `
<table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fff9f5; width: 100%; min-width: 100%; margin: 0; padding: 25px 10px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;">
  <tr>
    <td align="center">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 40px rgba(165, 8, 8, 0.08); border: 1px solid #f6f0ea; margin: 0 auto;">
        <!-- HEADER -->
        <tr>
          <td align="center" style="background: linear-gradient(135deg, #a50808 0%, #be1212 100%); padding: 40px 25px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-family: 'Georgia', serif; font-size: 26px; font-weight: 800; letter-spacing: 0.5px; text-align: center;">New Wholesale B2B Quote Request</h1>
            <p style="color: #ffcccc; margin: 6px 0 0 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; text-align: center;">Commercial Sales Inquiry</p>
          </td>
        </tr>
        <!-- BODY -->
        <tr>
          <td style="padding: 30px 25px;">
            <p style="font-size: 16px; line-height: 1.6; color: #332d2c; margin-top: 0;">Hello Drymato Commercial Desk,</p>
            <p style="font-size: 15px; line-height: 1.6; color: #5a4b4a;">A new business client has requested direct factory pricing and sample kit for bulk supply. Here are the submission details:</p>
            
            <!-- DETAILS TABLE -->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 25px 0; font-size: 14px; border-collapse: collapse; width: 100%;">
              <tr style="background-color: #fffcf9;">
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: bold; color: #a50808; width: 40%;">Full Name</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; color: #332d2c; font-weight: 600;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: bold; color: #a50808;">Company Name</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; color: #332d2c; font-weight: 700;">${companyName}</td>
              </tr>
              <tr style="background-color: #fffcf9;">
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: bold; color: #a50808;">GST Number / Tax ID</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; color: #332d2c; font-weight: 700; text-transform: uppercase;">${gstNumber || "Not Provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: bold; color: #a50808;">Email Address</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #a50808; text-decoration: none; border-bottom: 1px dashed #a50808;">${email}</a>
                </td>
              </tr>
              <tr style="background-color: #fffcf9;">
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: bold; color: #a50808;">Phone / WhatsApp</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; color: #332d2c; font-weight: 600;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: bold; color: #a50808;">Product Interest</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; color: #332d2c; font-weight: 600;">${productInterest || "N/A"}</td>
              </tr>
              <tr style="background-color: #fffcf9;">
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: bold; color: #a50808;">Monthly Estimated Volume</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; color: #332d2c; font-weight: 700;">${estimatedVolume || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; font-weight: bold; color: #a50808;">Packaging Requirement</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid #f6eedf; color: #332d2c; font-weight: 600;">${packagingFormat || "N/A"}</td>
              </tr>
            </table>
            
            <!-- SPECIFIC REQUIREMENTS MESSAGE BOX -->
            <div style="background-color: #fff9f5; border-left: 4px solid #a50808; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <strong style="color: #a50808; display: block; margin-bottom: 10px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Custom Recipe / Specific Requirements:</strong>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #332d2c; font-style: italic;">
                ${message ? message.replace(/\n/g, '<br/>') : 'No additional custom specs provided.'}
              </p>
            </div>
    
            <!-- ACTION BUTTON -->
            <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin-top: 30px; margin-left: auto; margin-right: auto;">
              <tr>
                <td align="center" style="background-color: #a50808; border-radius: 30px;">
                  <a href="mailto:${email}" style="display: inline-block; padding: 14px 35px; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Reply to Wholesale Buyer</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- FOOTER -->
        <tr>
          <td align="center" style="background-color: #faf6f2; padding: 25px; text-align: center; font-size: 12px; color: #a29190; border-top: 1px solid #f3ebe1;">
            <p style="margin: 0 0 6px 0; line-height: 1.5; text-align: center;">Drymato B2B Wholesale Portal &bull; Factory Direct Supply</p>
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
        console.error("Error in wholesale POST route: ", error);
        return NextResponse.json(
            { success: false, error: error.message || "An error occurred while sending email." },
            { status: 500 }
        );
    }
}
