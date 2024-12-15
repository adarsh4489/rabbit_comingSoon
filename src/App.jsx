
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Banner from './Pages/Banner'
import Contact from './Pages/Contact'
import './App.css'

import { useState } from 'react'



function App() {
  const [lightMode,setLightMode]=useState(false);

  return (
 <div className={lightMode?"text-white w-full h-full max-w-[1400px] mx-auto":"mx-auto max-w-[1400px] w-full h-full text-black"} >
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
