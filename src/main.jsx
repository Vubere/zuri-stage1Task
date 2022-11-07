import React, {Suspense, lazy} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </Router>
  </React.StrictMode>
)
