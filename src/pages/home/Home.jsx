import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Vision from '../../components/Vision'
import Mission from '../../components/Mission'
import Investment from '../../components/Investment'

export default function Home() {
  return (
    <>
      <Header />
        <main>
          <Hero />
          <About />
          <Vision />
          <Mission />
          <Investment />
        </main>
      {/* Footer */}
    </>
  )
}