import './App.css'
import Brands from './components/brands/brands'
import HeroSection from './components/hero/heroSection'
import Popular from './components/popular/popular'
import Navbar from './layout/navabr'

function App() {
  return (
    <div className='lg:container lg:px-0 px-4 mx-auto'>
      <Navbar />
      <HeroSection />
      <Brands />
      <Popular />
    </div>
  )
}

export default App
