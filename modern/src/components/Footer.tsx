export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-900 to-brand-900/95 text-brand-100 py-8 mt-8">
      <div className="container grid md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Logo" className="w-9 h-9 rounded" />
          <div className="leading-tight">
            <div className="font-extrabold tracking-wide text-sm">BUGEMA UNIVERSITY</div>
            <div className="font-bold tracking-wider text-xs text-brand-200">VOCATIONAL SCHOOL LTD</div>
          </div>
        </div>
        <nav className="flex justify-center gap-5 text-brand-200 font-semibold">
          <a href="#courses" className="hover:text-white">Courses</a>
          <a href="#sports" className="hover:text-white">Sports</a>
          <a href="#leadership" className="hover:text-white">Leadership</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <p className="text-right text-sm text-brand-300">© {new Date().getFullYear()} Bugema University Vocational School</p>
      </div>
    </footer>
  )
}


