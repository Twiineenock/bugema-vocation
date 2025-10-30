import { useEffect, useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/85 shadow' : 'bg-white/70'} border-b border-brand-100`}> 
      <div className="container h-[--header-height] flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 rounded" />
          <div className="leading-tight">
            <div className="text-brand-700 font-extrabold text-sm tracking-wide">BUGEMA UNIVERSITY</div>
            <div className="text-brand-500 font-bold text-xs tracking-wider">VOCATIONAL SCHOOL LTD</div>
          </div>
        </a>
        <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="md:hidden px-3 py-2 rounded-lg bg-brand-600 text-white">☰</button>
        <nav className={`md:flex items-center gap-6 font-semibold text-slate-700 ${open ? 'flex absolute left-0 right-0 top-[--header-height] bg-white px-6 py-4 border-b border-brand-100' : 'hidden md:flex'}`}>
          {[
            ['Home', '#home'],
            ['Courses', '#courses'],
            ['Tuition', '#tuition'],
            ['Sports', '#sports'],
            ['Leadership', '#leadership'],
            ['Contact', '#contact']
          ].map(([label, href]) => (
            <a key={href} href={href} className="relative hover:text-brand-700 after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:bg-gradient-to-r after:from-brand-400 after:to-brand-700 after:transition-transform">
              {label}
            </a>
          ))}
          <a href="#contact" className="hidden md:inline-flex items-center bg-gradient-to-r from-brand-600 to-brand-400 text-white px-4 py-2 rounded-xl shadow-glass">Apply Now</a>
        </nav>
      </div>
    </header>
  )
}


