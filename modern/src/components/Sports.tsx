const items = [
  ['Football', '/sports-1.jpeg'],
  ['Netball', '/sports-2.jpeg'],
  ['Athletics', '/sports-3.jpeg'],
  ['Indoor Games', '/sports-4.jpeg']
]

export default function Sports() {
  return (
    <section id="sports" className="section">
      <div className="container">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-700">Sports & Co‑curricular</h2>
          <p className="text-slate-600 mt-2">We nurture the whole learner through sports, clubs and events.</p>
        </header>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(([title, src], i) => (
            <figure key={title} className="relative overflow-hidden rounded-2xl border border-brand-100 shadow-glass animate-reveal" style={{ animationDelay: `${i * 80}ms` }}>
              <img src={src} alt={title} className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-white font-semibold bg-gradient-to-b from-transparent to-black/60">{title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}


