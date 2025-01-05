import Backtotop from "./Components/Backtotop/backtotop"
import Blog from "./Components/Blog/Blog"
import Clients from "./Components/Clients/Clients"
import FeaturesSection from "./Components/Features/Features"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import StatsDisplay from "./Components/Stats-2/Stats-2"
import Stats from "./Components/Stats/Stats"
import Team from "./Components/Team/Team"
import TestimonialCarousel from "./Components/Testimonial/Testimonial"
import TwitterParallax from "./Components/Twitter/Twitter"

function App() {

  return (
    <>
      <Hero />
      <FeaturesSection />
      <Blog />
      <TestimonialCarousel />
      <Stats />
      <StatsDisplay />
      <Team />
      <TwitterParallax />
      <Clients />
      <Backtotop />
      <Footer />
    </>
  )
}

export default App
