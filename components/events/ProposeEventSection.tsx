'use client'

import { useCallback, useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const initial = {
  name: '',
  email: '',
  title: '',
  idea: '',
}

export function ProposeEventSection() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(initial)
  const panelRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const lastActive = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setOpen(false)
    setForm(initial)
  }, [])

  useEffect(() => {
    if (!open) return
    lastActive.current = document.activeElement as HTMLElement
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
      lastActive.current?.focus?.()
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.alert(
      "Thanks for sharing your idea! The committee will review it and get back to you by email if we need more detail."
    )
    close()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-900 to-primary-950 text-primary-100">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="font-display mb-6 text-4xl font-bold text-primary-100 md:text-5xl">
            Want to organise an event?
          </h2>
          <p className="mb-8 text-xl text-white">
            Have an idea for the community? We&apos;d love to hear from you.
          </p>
          <Button
            type="button"
            variant="primary"
            className="bg-white text-primary-900 shadow-xl"
            onClick={() => setOpen(true)}
          >
            Propose an event
          </Button>
        </div>
      </section>

      {open ? (
        <div
          className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center sm:p-4"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[2px] transition-opacity"
            aria-label="Close dialog"
            onClick={close}
          />

          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="relative z-10 flex max-h-[min(92vh,720px)] w-full max-w-lg flex-col rounded-t-2xl border border-neutral-200 bg-white text-left text-neutral-900 shadow-2xl sm:rounded-2xl"
          >
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-neutral-100 px-5 py-4 sm:px-6">
              <h2 id={titleId} className="font-display pr-2 text-xl font-bold text-neutral-900 sm:text-2xl">
                Propose an event
              </h2>
              <button
                type="button"
                className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                onClick={close}
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <form onSubmit={onSubmit} className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-4 sm:px-6 sm:py-5">
              <div className="space-y-4">
                <div>
                  <label htmlFor="propose-name" className="mb-1.5 block text-sm font-semibold text-neutral-700">
                    Your name
                  </label>
                  <input
                    id="propose-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={onChange}
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="propose-email" className="mb-1.5 block text-sm font-semibold text-neutral-700">
                    Email
                  </label>
                  <input
                    id="propose-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none"
                    placeholder="you@student.brookes.ac.uk"
                  />
                </div>

                <div>
                  <label htmlFor="propose-title" className="mb-1.5 block text-sm font-semibold text-neutral-700">
                    Working title <span className="font-normal text-neutral-500">(optional)</span>
                  </label>
                  <input
                    id="propose-title"
                    name="title"
                    type="text"
                    value={form.title}
                    onChange={onChange}
                    className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none"
                    placeholder="e.g. Film night, workshop, fundraiser…"
                  />
                </div>

                <div>
                  <label htmlFor="propose-idea" className="mb-1.5 block text-sm font-semibold text-neutral-700">
                    Describe your idea
                  </label>
                  <textarea
                    id="propose-idea"
                    name="idea"
                    value={form.idea}
                    onChange={onChange}
                    required
                    rows={5}
                    className="w-full resize-y rounded-xl border-2 border-neutral-200 px-4 py-3 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none"
                    placeholder="What would happen? Who is it for? Any preferred dates or help you need from the committee?"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col-reverse gap-3 border-t border-neutral-100 pt-4 sm:flex-row sm:justify-end">
                <Button type="button" variant="secondary" className="w-full sm:w-auto" onClick={close}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  Send proposal
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  )
}
