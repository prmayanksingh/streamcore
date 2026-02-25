import Navbar from '../components/Navbar'
import StartProjectSection from '../sections/home/StartProjectSection'
import HeroSection from '../sections/services/HeroSection'
import ServicesOverviewSection from '../sections/services/ServicesOverviewSection'
import StatsSection from '../sections/services/StatsSection'
import FooterSection from '../sections/home/FooterSection'
import Temp from '../sections/Temp'

const Services = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesOverviewSection />
      <StartProjectSection />
      <FooterSection />
    </div>
  )
}

export default Services