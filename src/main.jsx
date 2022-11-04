import React, {Suspense, lazy} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Loading from './components/Loading'

const Home = lazy(()=>import('./pages/Home'))
const Contact = lazy(()=>import('./pages/Contact'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
      <Router>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </Router>
    </Suspense>
  </React.StrictMode>
)
