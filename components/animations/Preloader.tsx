'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap, registerGsapPlugins } from '@/lib/gsap'
import { isMinMd, prefersReducedMotion } from '@/lib/viewport'

const PETAL_COUNT = 13

export type PreloaderProps = {
  onFinish?: () => void
}

/**
 * Desktop (md+): как раньше — кластер по ширине подсолнуха, «OBU UA» в absolute справа,
 * сдвиг подсолнуха влево и появление текста слева направо.
 * Mobile: колонка по центру, текст появляется снизу без горизонтального слайда.
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

    const isDesktop = isMinMd()
    const reduceMotion = prefersReducedMotion()

    if (reduceMotion) {
      gsap.set(stage, { autoAlpha: 1 })
      gsap.set(cluster, { autoAlpha: 1 })
      gsap.set(sunflowerStage, { autoAlpha: 1, scale: 1, x: 0, y: 0 })
      gsap.set(letters, { autoAlpha: 1, x: 0, y: 0 })
      gsap.set(petals, { scale: 1, rotation: 0 })
      if (center) gsap.set(center, { scale: 1 })
      const tl = gsap.timeline({
        onComplete: () => onFinishRef.current?.(),
      })
      tl.to({}, { duration: 0.35 })
      tl.to(root, { autoAlpha: 0, duration: 0.35, ease: 'power1.inOut' })
      return () => tl.kill()
    }

    gsap.set(stage, { autoAlpha: 1 })
    gsap.set(cluster, { autoAlpha: 1 })
    gsap.set(sunflowerStage, {
      autoAlpha: 0,
      scale: 0.55,
      x: 0,
      y: 0,
      transformOrigin: 'center center',
    })
    if (isDesktop) {
      gsap.set(letters, { autoAlpha: 0, x: 48, y: 0, transformOrigin: 'left center' })
    } else {
      gsap.set(letters, { autoAlpha: 0, x: 0, y: 24, transformOrigin: 'center center' })
    }
    gsap.set(petals, { scale: 0, rotation: -180, transformOrigin: 'center center' })
    if (center) gsap.set(center, { scale: 0, transformOrigin: 'center center' })

    const tl = gsap.timeline({
      onComplete: () => {
        onFinishRef.current?.()
      },
    })

    tl.to(sunflowerStage, { autoAlpha: 1, scale: 1, duration: 0.65, ease: 'power2.out' }, 0)
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

    tl.to({}, { duration: 0.5 })

    if (isDesktop) {
      tl.to(sunflowerStage, {
        x: -28,
        scale: 0.88,
        duration: 0.5,
        ease: 'power2.inOut',
      })
      tl.fromTo(
        letters,
        { autoAlpha: 0, x: 48 },
        { autoAlpha: 1, x: 0, duration: 0.55, ease: 'power3.out' }
      )
    } else {
      tl.to(sunflowerStage, { scale: 0.92, duration: 0.4, ease: 'power2.out' }, '+=0')
      tl.fromTo(
        letters,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      )
    }

    tl.to({}, { duration: 0.4 })
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
      {/* Десктоп: без max-width у stage — как в оригинале, кластер центрируется целиком */}
      <div
        ref={stageRef}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 md:px-6"
      >
        {/*
          Mobile: flex-колонка. md+: display:contents — подсолнух и буквы снова прямые дети
          relative inline-block кластера (как раньше на десктопе).
        */}
        <div ref={clusterRef} className="relative inline-block">
          <div className="flex flex-col items-center gap-6 md:contents">
            <div
              ref={sunflowerStageRef}
              className="relative h-36 w-36 shrink-0 scale-[0.55] opacity-0 will-change-transform sm:h-40 sm:w-40 md:h-48 md:w-48"
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
                      className="h-10 w-6 rounded-[50%/60%_60%_40%_40%] bg-gradient-to-b from-accent-300 to-accent-500 shadow-sm shadow-black/25 sm:h-11 sm:w-7 md:h-12 md:w-8"
                    />
                  </div>
                )
              })}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  data-preloader-center
                  className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-800 to-amber-950 shadow-lg ring-2 ring-white/25 sm:h-14 sm:w-14 md:h-16 md:w-16"
                >
                  <div
                    className="absolute inset-0 rounded-full opacity-90 [background-image:radial-gradient(circle,#422006_2px,transparent_2px)] [background-size:8px_8px]"
                    aria-hidden
                  />
                </div>
              </div>
            </div>

            {/* Mobile: блок в потоке под подсолнухом. Desktop: absolute как в оригинале */}
            <div className="relative w-full max-w-[min(100%,20rem)] md:absolute md:left-[calc(100%-20px)] md:top-1/2 md:w-auto md:max-w-none md:-translate-y-1/2 md:pl-[10px]">
              <div
                ref={lettersRef}
                className="flex translate-x-0 flex-wrap justify-center gap-0.5 font-display text-3xl font-extrabold tracking-tight text-white opacity-0 sm:text-4xl md:translate-x-[48px] md:flex-nowrap md:justify-start md:text-6xl"
              >
                {['O', 'B', 'U', '\u00a0', 'U', 'A'].map((letter, i) => (
                  <span
                    key={`${letter}-${i}`}
                    className={letter === '\u00a0' ? 'inline-block w-2 sm:w-2.5 md:w-3' : 'inline-block'}
                  >
                    {letter === '\u00a0' ? '\u00a0' : letter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
