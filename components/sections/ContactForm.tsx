'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'

const initial = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export type ContactFormState = typeof initial

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initial)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.alert("Thank you for your message! We'll get back to you soon.")
    setForm(initial)
  }

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="rounded-2xl border-2 border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8">
      <h2 className="font-display mb-6 text-3xl font-bold gradient-text">Send us a Message</h2>

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-neutral-700">
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 transition-colors focus:border-primary-500 focus:outline-none"
            placeholder="John Doe"
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-neutral-700">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
            className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 transition-colors focus:border-primary-500 focus:outline-none"
            placeholder="john@example.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-neutral-700">
            Subject
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={onChange}
            required
            className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 transition-colors focus:border-primary-500 focus:outline-none"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="membership">Membership Question</option>
            <option value="event">Event Information</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-neutral-700">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={onChange}
            required
            rows={6}
            className="w-full resize-none rounded-xl border-2 border-neutral-200 px-4 py-3 transition-colors focus:border-primary-500 focus:outline-none"
            placeholder="Tell us how we can help..."
          />
        </div>

        <Button type="submit" variant="primary" className="w-full py-4 text-lg">
          Send Message
        </Button>
      </form>
    </div>
  )
}
