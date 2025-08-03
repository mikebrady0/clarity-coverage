"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitQuoteRequest } from "@/actions/quote-actions"
import { CheckCircle, AlertCircle } from "lucide-react"

export function QuoteForm() {
  const [state, action, isPending] = useActionState(submitQuoteRequest, null)

  return (
    <div className="bg-slate-900 rounded-lg p-8 text-white">
      <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>

      {state?.success && (
        <div className="mb-6 p-4 bg-green-600 rounded-lg flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <p className="text-sm">{state.message}</p>
        </div>
      )}

      {state?.error && (
        <div className="mb-6 p-4 bg-red-600 rounded-lg flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <p className="text-sm">{state.error}</p>
        </div>
      )}

      <form action={action} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="firstName"
            placeholder="First Name"
            className="bg-white text-slate-900"
            required
            disabled={isPending}
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            className="bg-white text-slate-900"
            required
            disabled={isPending}
          />
        </div>
        <Input
          name="email"
          placeholder="Email Address"
          type="email"
          className="bg-white text-slate-900"
          required
          disabled={isPending}
        />
        <Input
          name="phone"
          placeholder="Phone Number"
          type="tel"
          className="bg-white text-slate-900"
          required
          disabled={isPending}
        />
        <select
          name="insuranceType"
          className="w-full p-3 rounded-md bg-white text-slate-900 disabled:opacity-50"
          required
          disabled={isPending}
        >
          <option value="">Select Insurance Type</option>
          <option value="Property & Casualty">Property & Casualty</option>
          <option value="Life & Health">Life & Health</option>
          <option value="Pet Insurance">Pet Insurance</option>
          <option value="Medicare/Medicaid">Medicare/Medicaid</option>
        </select>
        <Textarea
          name="message"
          placeholder="Tell us about your insurance needs..."
          className="bg-white text-slate-900"
          disabled={isPending}
        />
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50" disabled={isPending}>
          {isPending ? "Submitting..." : "Get My Free Quote"}
        </Button>
      </form>
    </div>
  )
}
