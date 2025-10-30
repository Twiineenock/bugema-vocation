import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Tuition from './components/Tuition'
import Sports from './components/Sports'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Tuition />
        <Sports />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


