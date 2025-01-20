"use server"

import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})

export async function submitContactForm(formData: FormData) {
  try {
    const validatedFields = contactFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    })

    // Simulate sending email/storing in database
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Thank you for your message. We'll get back to you soon!" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message }
    }
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

