import Backtotop from "./Components/Backtotop/backtotop"
import Blog from "./Components/Blog/Blog"
import Clients from "./Components/Clients/Clients"
import FeaturesSection from "./Components/Features/Features"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Quote from "./Components/Quote/Quote"
import Recommended from "./Components/Recommended/Recommended"
import StatsDisplay from "./Components/Stats-2/Stats-2"
import Stats from "./Components/Stats/Stats"
import Team from "./Components/Team/Team"
import TestimonialCarousel from "./Components/Testimonial/Testimonial"
import TwitterParallax from "./Components/Twitter/Twitter"
import Work from "./Components/Work/Work"

function App() {

  return (
    <>
      <Hero />
      <FeaturesSection />
      <Blog />
      <TestimonialCarousel />
      <Stats />
      <Work />
      <StatsDisplay />
      <Team />
      <Recommended />
      <TwitterParallax />
      <Clients />
      <Backtotop />
      <Quote />
      <Footer />
    </>
  )
}

export default App
