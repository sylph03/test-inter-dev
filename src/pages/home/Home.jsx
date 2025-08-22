import { useState, useEffect } from "react";
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Vision from '../../components/Vision'
import Mission from '../../components/Mission'
import Investment from '../../components/Investment'
import Achievements from '../../components/Achievements'

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setFadeIn(true), 50);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="animate-pulse text-2xl font-semibold text-blue-600">
          Đang tải...
        </div>
      </div>
    );
  }

  return (
    <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Vision />
        <Mission />
        <Investment />
        <Achievements />
      </main>
      {/* Footer */}
    </div>
  )
}