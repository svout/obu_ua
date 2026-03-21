'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

const PETAL_COUNT = 13

export type PreloaderProps = {
  onFinish?: () => void
}

/**
 * Single GSAP timeline: petal formation + sunflower reveal → pause → shift left →
 * "OBU UA" from right → hold → fade overlay. Initial states only via gsap.set (no visible flash).
 */
export default function Preloader({ onFinish }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const clusterRef = useRef<HTMLDivElement>(null)
  const sunflowerStageRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<HTMLDivElement>(null)
  const onFinishRef = useRef(onFinish)
  onFinishRef.current = onFinish

  useLayoutEffect(() => {
    registerGsapPlugins()
    const root = rootRef.current
    const stage = stageRef.current
    const cluster = clusterRef.current
    const sunflowerStage = sunflowerStageRef.current
    const letters = lettersRef.current
    if (!root || !stage || !cluster || !sunflowerStage || !letters) {
      onFinishRef.current?.()
      return
    }

    const petals = root.querySelectorAll<HTMLElement>('[data-preloader-petal]')
    const center = root.querySelector<HTMLElement>('[data-preloader-center]')
    if (petals.length === 0) {
      onFinishRef.current?.()
      return
    }

    // --- Initial state (nothing readable as “broken” UI) ---
    gsap.set(stage, { autoAlpha: 1 })
    gsap.set(cluster, { autoAlpha: 1 })
    gsap.set(sunflowerStage, {
      autoAlpha: 0,
      scale: 0.55,
      x: 0,
      transformOrigin: 'center center',
    })
    gsap.set(letters, { autoAlpha: 0, x: 48, transformOrigin: 'left center' })
    gsap.set(petals, { scale: 0, rotation: -180, transformOrigin: 'center center' })
    if (center) gsap.set(center, { scale: 0, transformOrigin: 'center center' })

    const tl = gsap.timeline({
      onComplete: () => {
        onFinishRef.current?.()
      },
    })

    // 1. Sunflower fades in + scales up; petals form inside (same window)
    tl.to(
      sunflowerStage,
      { autoAlpha: 1, scale: 1, duration: 0.65, ease: 'power2.out' },
      0
    )
    tl.to(
      petals,
      {
        scale: 1,
        rotation: 0,
        stagger: 0.05,
        duration: 0.52,
        ease: 'back.out(1.45)',
      },
      0
    )
    if (center) {
      tl.to(center, { scale: 1, duration: 0.34, ease: 'back.out(2)' }, 0.16)
    }

    // 2. Pause
    tl.to({}, { duration: 0.5 })

    // 3. Sunflower moves left, slight scale down (room for wordmark)
    tl.to(sunflowerStage, {
      x: -28,
      scale: 0.88,
      duration: 0.5,
      ease: 'power2.inOut',
    })

    // 4. "OBU UA" from right + fade (final row: [sunflower][text])
    tl.fromTo(letters, { autoAlpha: 0, x: 48 }, { autoAlpha: 1, x: 0, duration: 0.55, ease: 'power3.out' })

    // 5. Hold final layout
    tl.to({}, { duration: 0.4 })

    // 6. Fade entire preloader
    tl.to(root, { autoAlpha: 0, duration: 0.55, ease: 'power2.inOut' })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-primary-950"
      aria-live="polite"
      aria-busy="true"
    >
      <div
        ref={stageRef}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6"
      >
        {/*
          Cluster is only as wide as the sunflower: letters are out of flow so the group
          stays viewport-centered until the sunflower slides left and text appears.
        */}
        <div ref={clusterRef} className="relative inline-block">
          <div
            ref={sunflowerStageRef}
            className="relative h-44 w-44 shrink-0 scale-[0.55] opacity-0 will-change-transform md:h-48 md:w-48"
          >
          {Array.from({ length: PETAL_COUNT }).map((_, i) => {
            const angle = (i * 360) / PETAL_COUNT
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-48px)`,
                  transformOrigin: 'center center',
                }}
              >
                <div
                  data-preloader-petal
                  className="h-11 w-7 rounded-[50%/60%_60%_40%_40%] bg-gradient-to-b from-accent-300 to-accent-500 shadow-sm shadow-black/25 md:h-12 md:w-8"
                />
              </div>
            )
          })}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              data-preloader-center
              className="h-14 w-14 rounded-full bg-gradient-to-br from-amber-800 to-amber-950 shadow-lg ring-2 ring-white/25 md:h-16 md:w-16"
            >
              <div
                className="absolute inset-0 rounded-full opacity-90 [background-image:radial-gradient(circle,#422006_2px,transparent_2px)] [background-size:8px_8px]"
                aria-hidden
              />
            </div>
          </div>
          </div>

          {/* Pull toward sunflower: layout box ignores transform, so offset from 100% closes the gap */}
          <div className="absolute left-[calc(100%-20px)] top-1/2 -translate-y-1/2 pl-[10px]">
            <div
              ref={lettersRef}
              className="flex translate-x-[48px] items-center gap-0.5 font-display text-4xl font-extrabold tracking-tight text-white opacity-0 md:text-6xl"
            >
              {['O', 'B', 'U', '\u00a0', 'U', 'A'].map((letter, i) => (
                <span
                  key={`${letter}-${i}`}
                  className={letter === '\u00a0' ? 'inline-block w-2 md:w-3' : 'inline-block'}
                >
                  {letter === '\u00a0' ? '\u00a0' : letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
