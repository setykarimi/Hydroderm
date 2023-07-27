import './App.css'
import Brands from './components/brands/brands'
import HeroSection from './components/hero/heroSection'
import Popular from './components/popular/popular'
import SpecialProduct from './components/specialProduct/specialProduct'
import Navbar from './layout/navabr'

function App() {
  return (
    <div className='lg:container lg:px-0 px-4 mx-auto'>
      <Navbar />
      <HeroSection />
      <Brands />
      <Popular />
      <SpecialProduct />
    </div>
  )
}

export default App
