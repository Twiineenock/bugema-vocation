export default function Tuition() {
  return (
    <section id="tuition" className="section">
      <div className="container">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-700">Tuition</h2>
          <p className="text-slate-600 mt-2">Affordable options for day scholars and boarders. Short courses from 230,000/=</p>
        </header>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="card p-6 animate-reveal">
            <h3 className="text-xl font-bold text-brand-700 flex items-center gap-2">New <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-2 py-1 rounded-lg"><span className="bg-gradient-to-r from-brand-600 to-brand-400 text-white px-2 py-0.5 rounded">From</span> 400,000</span></h3>
            <table className="w-full mt-4 text-slate-700">
              <thead className="bg-gradient-to-b from-brand-50 to-white text-brand-700">
                <tr><th className="text-left p-2"> </th><th className="text-left p-2">Certificate</th><th className="text-left p-2">Certificate (Sem.)</th><th className="text-left p-2">Diploma</th></tr>
              </thead>
              <tbody>
                <tr className="border-b last:border-none"><td className="p-2 font-semibold">Boarder</td><td className="p-2">650,000</td><td className="p-2">975,000</td><td className="p-2">1,000,000</td></tr>
                <tr><td className="p-2 font-semibold">Day</td><td className="p-2">400,000</td><td className="p-2">600,000</td><td className="p-2">750,000</td></tr>
              </tbody>
            </table>
            <p className="text-slate-600 mt-3">Fees payable in any listed bank.</p>
          </div>
          <div className="card p-6 animate-reveal [animation-delay:100ms]">
            <h3 className="text-xl font-bold text-brand-700">Bank Details</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li><strong>Bank:</strong> UBA Bank (United Bank of Africa)</li>
              <li><strong>Account Name:</strong> Bugema University Vocational School</li>
              <li><strong>Account Number:</strong> 1 203 000 057</li>
            </ul>
            <p className="text-slate-500 mt-2 text-sm">Present bank slip to the bursar after payment.</p>
          </div>
          <div className="card p-6 animate-reveal [animation-delay:200ms]">
            <h3 className="text-xl font-bold text-brand-700">Study Modes</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>Sunday Programme</li>
              <li>Evening Programme</li>
              <li>Holiday Programme</li>
              <li>Full-time Programme</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


