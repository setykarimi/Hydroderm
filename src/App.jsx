import './App.css'
import Banner from './components/banner/banner'
import CardSection from './components/cards/cardSection'
import Navbar from './layout/navbar'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Banner />
      <CardSection />
     </div>
  )
}

export default App
