import Navbar from '../components/Navbar'
import StartProjectSection from '../sections/home/StartProjectSection'
import HeroSection from '../sections/services/HeroSection'
import ServicesOverviewSection from '../sections/services/ServicesOverviewSection'
import StatsSection from '../sections/services/StatsSection'
import FooterSection from '../sections/home/FooterSection'
const Services = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <div className="h-[5em] lg:h-[8em] xl:h-[9em] w-full"></div>
      <HeroSection />
      <StatsSection />
      <ServicesOverviewSection />
      <StartProjectSection />
      <FooterSection />
    </div>
  )
}

export default Services