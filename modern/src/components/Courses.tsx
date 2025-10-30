const tech = [
  'Certificate in Building Construction',
  'Certificate in Automotive Mechanics',
  'Certificate in Welding & Metal Fabrication',
  'Certificate in Electrical Installation',
  'Certificate in Electronics',
  'Certificate in Plumbing',
  'Certificate in Carpentry & Joinery',
  'Certificate in Tailoring & Fashion Design'
]
const biz = [
  'Certificate in Business Administration / Accountancy',
  'Certificate in Office Administration / Secretarial',
  'Certificate in Purchasing & Store Management',
  'Certificate in Business Management',
  'Certificate in Marketing',
  'Certificate in Hotel & Institutional Catering',
  'Certificate in ICT',
  'Certificate in Cosmetology & Body Therapy'
]
const dip = [
  'Diploma in Marketing','Diploma in Civil Engineering','Diploma in Mechanical Engineering','Diploma in Electrical Engineering','Diploma in Water & Sanitation Engineering','Diploma in Tailoring & Garment Design','Diploma in Hotel & Institutional Catering','Diploma in ICT','Diploma in Cosmetology','Diploma in Office Administration / Secretarial','Diploma in Procurement & Logistics Management','Diploma in Business Management','Diploma in Business Administration / Accountancy'
]

function Card({ title, items, delay = 0 }: { title: string; items: string[]; delay?: number }) {
  return (
    <article className="card p-6 animate-reveal" style={{ animationDelay: `${delay}ms` }}>
      <h3 className="text-brand-700 font-bold text-xl mb-3">{title}</h3>
      <ul className="space-y-2 text-slate-700">
        {items.map(it => (
          <li key={it} className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-400" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Courses() {
  return (
    <section id="courses" className="section bg-brand-50/40">
      <div className="container">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-700">Courses Offered</h2>
          <p className="text-slate-600 mt-2">Technical, Business, and Diploma programs designed with industry needs in mind.</p>
        </header>
        <div className="grid md:grid-cols-3 gap-5">
          <Card title="Technical Courses" items={tech} />
          <Card title="Business Courses" items={biz} delay={80} />
          <Card title="Diploma Courses" items={dip} delay={160} />
        </div>
      </div>
    </section>
  )
}


