import React, {Suspense, lazy} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
        </Routes>
      </Router>
    </Suspense>
  </React.StrictMode>
)
