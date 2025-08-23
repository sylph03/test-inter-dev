import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Vision from '../../components/Vision'
import Mission from '../../components/Mission'
import Investment from '../../components/Investment'
import Achievements from '../../components/Achievements'
import QueteSection from '../../components/QuoteSection'
import PartnerFeedback from '../../components/PartnerFeedback'

export default function Home() {

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Vision />
        <Mission />
        <Investment />
        <Achievements />
        <QueteSection />
        <PartnerFeedback />
      </main>
      {/* Footer */}
    </div>
  )
}