"use server"

import { sendEmail, generateQuoteEmailTemplate, generateCustomerConfirmationTemplate } from "@/lib/email"

export async function submitQuoteRequest(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const insuranceType = formData.get("insuranceType") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !insuranceType) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      }
    }

    const quoteData = {
      firstName,
      lastName,
      email,
      phone,
      insuranceType,
      message: message || "No additional message provided",
    }

    // Send email to company
    await sendEmail({
      to: "quotes@claritycoverage.com", // Replace with your actual email
      subject: `New ${insuranceType} Insurance Quote Request from ${firstName} ${lastName}`,
      html: generateQuoteEmailTemplate(quoteData),
    })

    // Send confirmation email to customer
    await sendEmail({
      to: email,
      subject: "Your Insurance Quote Request - Clarity Coverage",
      html: generateCustomerConfirmationTemplate(firstName, insuranceType),
    })

    return {
      success: true,
      message: `Thank you ${firstName}! We've received your quote request and will contact you within 24 hours.`,
    }
  } catch (error) {
    console.error("Error submitting quote request:", error)
    return {
      success: false,
      error: "There was an error submitting your request. Please try again or call us directly.",
    }
  }
}

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      }
    }

    // Send email to company
    await sendEmail({
      to: "info@claritycoverage.com", // Replace with your actual email
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    })

    // Send confirmation to customer
    await sendEmail({
      to: email,
      subject: "Message Received - Clarity Coverage",
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${name},</p>
        <p>We've received your message and will respond within 24 hours.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <p>Best regards,<br>The Clarity Coverage Team</p>
      `,
    })

    return {
      success: true,
      message: `Thank you ${name}! We've received your message and will respond within 24 hours.`,
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      error: "There was an error sending your message. Please try again or call us directly.",
    }
  }
}
