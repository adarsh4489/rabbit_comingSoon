
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Banner from './Pages/Banner'
import Contact from './Pages/Contact'
import './App.css'

function App() {

  return (
 <div className='w-full h-[full]'>
 <Header/>
 <Routes>
  <Route exact path='/' element={<Banner/>}/>
  <Route exact path='/contact' element={<Contact/>}/>
 </Routes>
 </div>
  )
}

export default App
