import Footer from './components/Footer'

import './styles/main.css'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <main className='main'>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default App
