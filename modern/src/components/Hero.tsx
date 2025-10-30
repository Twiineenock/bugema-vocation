export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-900 via-brand-800 to-brand-900" />
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(60%_40%_at_50%_0%,#000,transparent)]">
        <img src="/hero-1.jpeg" alt="Hero" className="w-full h-[68vh] md:h-[80vh] object-cover animate-kenburns opacity-80" />
      </div>
      <div className="absolute top-20 left-6 w-48 h-48 rounded-full bg-brand-500/30 blur-2xl animate-floaty" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-brand-700/30 blur-2xl animate-floaty" />

      <div className="container h-[68vh] md:h-[80vh] flex items-center justify-center text-center">
        <div className="glass rounded-2xl p-6 md:p-10 max-w-3xl text-white">
          <span className="inline-block mb-2 bg-gradient-to-r from-brand-600 to-brand-400 px-3 py-1 rounded-full font-semibold">Admissions Open</span>
          <h1 className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-brand-100 bg-clip-text text-transparent tracking-tight">Skills For Life</h1>
          <p className="mt-3 md:mt-4 text-brand-50/95 md:text-lg">Hands-on technical & business training built with real workshops and industry alignment.</p>
          <div className="mt-5 flex gap-3 justify-center">
            <a href="#courses" className="px-5 py-3 rounded-xl bg-white text-brand-700 font-bold shadow-glass">Explore Programs</a>
            <a href="#tuition" className="px-5 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 text-white font-bold shadow-glass">View Tuition</a>
          </div>
        </div>
      </div>
    </section>
  )
}


