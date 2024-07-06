import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './Home';
import Show from './Show';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/show' element={<Show />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
