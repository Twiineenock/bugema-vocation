const leaders = [
  ['Principal', '/leader-principal.jpeg', 'Provides strategic leadership and quality assurance.'],
  ['Registrar', '/leader-registrar.jpeg', 'Admissions, records, and examinations oversight.'],
  ['Bursar', '/leader-bursar.jpeg', 'Finance and student accounts management.'],
  ['Sports Master', '/leader-sports.jpeg', 'Sports, clubs and wellness programs.']
]

export default function Leadership() {
  return (
    <section id="leadership" className="section bg-brand-50/40">
      <div className="container">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-700">School Leadership</h2>
          <p className="text-slate-600 mt-2">Meet the team guiding our vision and academic excellence.</p>
        </header>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {leaders.map(([title, src, desc], i) => (
            <article key={title} className="card p-6 text-center animate-reveal" style={{ animationDelay: `${i * 80}ms` }}>
              <img src={src} alt={title} className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white outline outline-2 outline-brand-200 shadow" />
              <h3 className="mt-3 text-brand-700 font-bold">{title}</h3>
              <p className="text-slate-600 text-sm">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


