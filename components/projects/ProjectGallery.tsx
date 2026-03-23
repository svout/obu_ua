'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

type ProjectGalleryProps = {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [active, setActive] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const close = useCallback(() => setActive(null), [])
  const openAt = useCallback((index: number) => setActive(index), [])

  const goNext = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % images.length))
  }, [images.length])

  const goPrev = useCallback(() => {
    setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length))
  }, [images.length])

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, close, goNext, goPrev])

  useEffect(() => {
    if (active === null) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [active])

  if (images.length === 0) return null

  const showNav = images.length > 1

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => openAt(index)}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 text-left shadow-sm outline-none ring-offset-2 transition-transform duration-300 hover:scale-[1.02] hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <Image
              src={src}
              alt={`${title} — image ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="sr-only">Open image {index + 1} in full screen</span>
          </button>
        ))}
      </div>

      {mounted && active !== null
        ? createPortal(
            <div
              className="pointer-events-none fixed inset-0 z-[250] flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-label={`${title} gallery`}
            >
              {/* Розмитий затемнений фон — клік закриває; портал у body, щоб перекрити Navbar (z-100) */}
              <button
                type="button"
                className="pointer-events-auto absolute inset-0 bg-neutral-900/55 backdrop-blur-xl backdrop-saturate-150"
                aria-label="Close gallery"
                onClick={close}
              />

              <button
                type="button"
                className="pointer-events-auto absolute right-3 top-3 z-[60] flex items-center gap-2 rounded-full border border-white/25 bg-white/95 px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-lg transition hover:bg-white md:right-5 md:top-5"
                onClick={close}
              >
                <X className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
                <span>Close</span>
              </button>

              {showNav ? (
                <>
                  <button
                    type="button"
                    className="pointer-events-auto absolute left-2 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-md transition hover:bg-white/35 md:left-5 md:h-14 md:w-14"
                    onClick={goPrev}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-8 w-8 md:h-9 md:w-9" strokeWidth={2.25} />
                  </button>
                  <button
                    type="button"
                    className="pointer-events-auto absolute right-2 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-md transition hover:bg-white/35 md:right-5 md:h-14 md:w-14"
                    onClick={goNext}
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-8 w-8 md:h-9 md:w-9" strokeWidth={2.25} />
                  </button>
                </>
              ) : null}

              <div className="pointer-events-auto relative z-40 mx-auto w-full max-w-[min(100vw-2rem,1400px)] px-2 pt-14 md:px-4 md:pt-4">
                <div className="relative h-[min(85vh,90vw)] w-full">
                  <Image
                    src={images[active]}
                    alt={`${title} — image ${active + 1}`}
                    fill
                    sizes="(max-width: 1400px) 95vw, 1400px"
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {showNav ? (
                <p className="pointer-events-auto absolute bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/20 bg-black/35 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                  {active + 1} / {images.length}
                </p>
              ) : null}
            </div>,
            document.body
          )
        : null}
    </>
  )
}
