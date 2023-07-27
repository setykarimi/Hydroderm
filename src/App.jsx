import './App.css'
import Blog from './components/blog/blog'
import Brands from './components/brands/brands'
import HeroSection from './components/hero/heroSection'
import OnlineShop from './components/onlineShop/onlineShop'
import Popular from './components/popular/popular'
import SpecialProduct from './components/specialProduct/specialProduct'
import Navbar from './layout/navabr'

function App() {
  return (
    <div className='lg:container px-4 mx-auto'>
      <Navbar />
      <HeroSection />
      <Brands />
      <Popular />
      <SpecialProduct />
      <OnlineShop />
      <Blog />
    </div>
  )
}

export default App
