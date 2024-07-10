      import React,{Component, useState} from 'react'
      import Navbar from './components/navbar/navbar'
      import {Route, Routes,BrowserRouter} from 'react-router-dom'
   import Home from './page/Home/Home'
    import Cart from './page/Cart/Cart'
    import PlaceOrder from './page/PlaceOrder/PlaceOrder'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
    

    const App= () =>{
      const [showlogin,setshowlogin]= useState(false)
        return(
          <>
          {showlogin?<loginpopup/>:<></>}
          <div className='app'>
            <Navbar setshowlogin={setshowlogin}/>
            <Routes>
              < Route path='/' Component={<Home/>}/>
              < Route path='/Cart' Component={<Cart/>}/>
              < Route path='/Order' Component={<PlaceOrder/>}/>
            </Routes>
          </div>
          <Footer/>
          </>
          
        )
      }
      export default App
