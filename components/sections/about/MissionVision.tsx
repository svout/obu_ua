export function MissionVision() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-blue-50 p-10">
            <div className="mb-4 text-5xl" aria-hidden>
              🎯
            </div>
            <h2 className="font-display mb-4 text-3xl font-bold gradient-text">Our Mission</h2>
            <p className="text-lg leading-relaxed text-neutral-700">
              To create a vibrant, supportive community where Ukrainian students at Oxford Brookes can
              connect, collaborate, and thrive academically, professionally, and culturally. We
              celebrate our heritage while building bridges to the wider community.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-accent-200 bg-gradient-to-br from-accent-50 to-yellow-50 p-10">
            <div className="mb-4 text-5xl" aria-hidden>
              🌟
            </div>
            <h2 className="font-display mb-4 text-3xl font-bold gradient-text">Our Vision</h2>
            <p className="text-lg leading-relaxed text-neutral-700">
              To be the leading Ukrainian student organization in the UK, known for innovation,
              cultural excellence, and meaningful impact. We envision a future where every Ukrainian
              student feels supported, empowered, and proud of their identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
