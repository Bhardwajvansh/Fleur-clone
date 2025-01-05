import Backtotop from "./Components/Backtotop/backtotop"
import Clients from "./Components/Clients/Clients"
import FeaturesSection from "./Components/Features/Features"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import StatsDisplay from "./Components/Stats-2/Stats-2"
import Stats from "./Components/Stats/Stats"
import TestimonialCarousel from "./Components/Testimonial/Testimonial"

function App() {

  return (
    <>
      <Hero />
      <FeaturesSection />
      <TestimonialCarousel />
      <Stats />
      <StatsDisplay />
      <Clients />
      <Backtotop />
      <Footer />
    </>
  )
}

export default App
