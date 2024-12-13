
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Banner from './Pages/Banner'
import Contact from './Pages/Contact'
import './App.css'
import Test from './Components/Test'
import { useState } from 'react'



function App() {
  const[lightMode,setLightMode]=useState(false);

  return (
 <div className=''>
 <Header lightMode={lightMode} setLightMode={setLightMode}/>
 <Routes>
  {/* <Route path='/test' element={<Test />}/> */}
  <Route exact path='/' element={<Banner lightMode={lightMode} />}/>
  <Route  path='/contactus' element={<Contact/>}/>
 </Routes>
 </div>
  )
}

export default App
