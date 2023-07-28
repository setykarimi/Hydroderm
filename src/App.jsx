import { useState } from 'react'
import './App.css'
import Blog from './components/blog/blog'
import Brands from './components/brands/brands'
import HeroSection from './components/hero/heroSection'
import OnlineShop from './components/onlineShop/onlineShop'
import Popular from './components/popular/popular'
import SpecialProduct from './components/specialProduct/specialProduct'
import Footer from './layout/footer'
import Navbar from './layout/navabr'

function App() {
  const [showMenu, setShowMenu] = useState(null)
  const hideMenuHandler = () => {
    setShowMenu(false)
  }

  return (
    <div className={`lg:container px-4 mx-auto ${showMenu && 'overflow-hidden'}`}>
      {showMenu && <div className='h-full blur absolute w-full' onClick={hideMenuHandler}></div>}
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeroSection />
      <Brands />
      <Popular />
      <SpecialProduct />
      <OnlineShop />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
