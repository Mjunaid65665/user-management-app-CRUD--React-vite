import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Create from './components/Create/Create'
import Update from './components/Update/Update'
import Read from './components/Read/Read'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => { 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path='/Create' element = {<Create />}></Route>
      <Route path='/Update/:id' element = {<Update />}></Route>
      <Route path="/read/:id" element={<Read />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
