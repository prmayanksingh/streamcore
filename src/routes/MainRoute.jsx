import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Work from '../pages/Work'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/work' element={<Work/>} />
    </Routes>
  )
}

export default MainRoute