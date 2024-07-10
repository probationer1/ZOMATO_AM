      import React from 'react'
      import Navbar from './components/navbar/navbar'
      import {Route, Routes,BrowserRouter} from 'react-router-dom'
   import Home from './page/Home/Home'
    import Cart from './page/Cart/Cart'
    import PlaceOrder from './page/PlaceOrder/PlaceOrder'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
    

    const App= () =>{
        return(
          <>
          <div className='app'>
            <Navbar/>
            <Routes>
              < Route path='/' element={<Home/>}/>
              < Route path='/Cart' element={<Cart/>}/>
              < Route path='/Order' element={<PlaceOrder/>}/>
            </Routes>
          </div>
          <Footer/>
          </>
          
        )
      }
      export default App
