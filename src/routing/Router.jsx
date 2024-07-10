
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AddPage from '../pages/AddPage'
import RetrieveInfo from '../components/RetrieveInfo'
import Buttons from '../components/Buttons'

function Router() {

 

  return (
    <BrowserRouter>
    <div>
      <Buttons />
      <Routes>
        <Route path="/" element={<AddPage />} />
        <Route path="/retrieve" element={<RetrieveInfo />} />
      </Routes>
    </div>
  </BrowserRouter>

  )
}

export default Router