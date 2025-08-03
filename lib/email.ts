interface EmailData {
  to: string
  subject: string
  html: string
}

export async function sendEmail(data: EmailData) {
  // In a real application, you would use a service like:
  // - Resend
  // - SendGrid
  // - Nodemailer with SMTP
  // - AWS SES

  // For demonstration, we'll simulate sending an email
  console.log("Sending email:", data)

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In production, replace this with actual email service
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // return await resend.emails.send(data)

  return { success: true, messageId: `mock-${Date.now()}` }
}

export function generateQuoteEmailTemplate(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  insuranceType: string
  message: string
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Insurance Quote Request</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1e293b; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f8f9fa; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1e293b; }
          .value { margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Insurance Quote Request</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${formData.firstName} ${formData.lastName}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${formData.email}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${formData.phone}</div>
            </div>
            <div class="field">
              <div class="label">Insurance Type:</div>
              <div class="value">${formData.insuranceType}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${formData.message}</div>
            </div>
            <div class="field">
              <div class="label">Submitted:</div>
              <div class="value">${new Date().toLocaleString()}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}

export function generateCustomerConfirmationTemplate(firstName: string, insuranceType: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Quote Request Received - Clarity Coverage</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1e293b; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .cta { background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Your Interest!</h1>
          </div>
          <div class="content">
            <p>Dear ${firstName},</p>
            <p>Thank you for requesting a quote for ${insuranceType} insurance from Clarity Coverage. We've received your information and one of our licensed insurance professionals will contact you within 24 hours.</p>
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Call us at (555) 123-4567 if you have immediate questions</li>
              <li>Visit our website to learn more about our services</li>
              <li>Follow us on social media for insurance tips and updates</li>
            </ul>
            <p>We look forward to helping you protect what matters most!</p>
            <p>Best regards,<br>The Clarity Coverage Team</p>
          </div>
        </div>
      </body>
    </html>
  `
}
