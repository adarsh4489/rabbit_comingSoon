
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Banner from './Pages/Banner'
import Contact from './Pages/Contact'
import './App.css'
import Test from './Components/Test'


function App() {

  return (
 <div className=''>
 <Header/>
 <Routes>
  <Route path='/test' element={<Test/>}/>
  <Route exact path='/' element={<Banner/>}/>
  <Route  path='/contact' element={<Contact/>}/>
 </Routes>
 </div>
  )
}

export default App
