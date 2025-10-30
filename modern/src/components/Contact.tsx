export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container grid md:grid-cols-2 gap-6 items-start">
        <div>
          <header className="mb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-700">Contact & Location</h2>
            <p className="text-slate-600 mt-2">32 Km Gayaza–Zirobwe Road, opposite Bugema Adventist Secondary School</p>
          </header>
          <ul className="space-y-2 text-slate-700">
            <li><strong>Phone:</strong> 0772 411 943, 0753 969 857</li>
            <li><strong>Email:</strong> <a className="text-brand-700 font-semibold" href="mailto:bugemauvocationalsch@gmail.com">bugemauvocationalsch@gmail.com</a></li>
            <li><strong>P.O. Box:</strong> 170871 Luweero</li>
            <li><strong>Office Hours:</strong> Mon–Fri 8:00–17:00</li>
          </ul>
          <a href="#tuition" className="inline-flex mt-4 bg-gradient-to-r from-brand-600 to-brand-400 text-white px-5 py-3 rounded-xl shadow-glass">How to Pay Fees</a>
        </div>
        <div className="card p-3">
          <div className="rounded-xl2 h-64 bg-gradient-to-br from-brand-50 to-brand-100 grid place-items-center text-brand-700 font-extrabold">Map preview</div>
          <p className="text-slate-500 text-sm mt-2">Embed Google Map here when deploying.</p>
        </div>
      </div>
    </section>
  )
}


