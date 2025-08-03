"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { submitContactForm } from "@/actions/quote-actions"
import { CheckCircle, AlertCircle, Send } from "lucide-react"

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, null)

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-slate-900">Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        {state?.success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
            <p className="text-sm text-green-800">{state.message}</p>
          </div>
        )}

        {state?.error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-600" />
            <p className="text-sm text-red-800">{state.error}</p>
          </div>
        )}

        <form action="https://formsubmit.co/bradyinsuranceservice@gmail.com" method="POST" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input name="name" placeholder="Your Name" required disabled={isPending} />
            <Input name="email" placeholder="Email Address" type="email" required disabled={isPending} />
          </div>
          <Input name="subject" placeholder="Subject" required disabled={isPending} />
          <Textarea name="message" placeholder="Your message..." rows={5} required disabled={isPending} />
          <Button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-50"
            disabled={isPending}
          >
            {isPending ? (
              <>Sending...</>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
