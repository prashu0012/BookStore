import { BrowserRouter, Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development'
// import Login from './assets/login'
import Home from './assets/home'

import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<Login/>} /> */}

        <Route path='/' element={<Home />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
