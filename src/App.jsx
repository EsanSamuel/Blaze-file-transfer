import React from 'react'
import { Navbar } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home ,Form,Files, Share} from './Pages'


const App = () => {
  return (
    <div className='bg-[#000026]'>
      <BrowserRouter>

       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Form />} />
          <Route path='/files' element={<Files />} />
          <Route path='/share' element={<Share />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App