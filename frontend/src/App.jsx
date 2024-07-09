      import React from 'react'
      import Navbar from './components/navbar/navbar'
      import {Route, Routes,BrowserRouter} from 'react-router-dom'
   import Home from './page/Home/Home'
    import Cart from './page/Cart/Cart'
    import PlaceOrder from './page/PlaceOrder/PlaceOrder'
    

    const App= () =>{
        return(
          <>
            <Navbar/>
            <Routes>
              < Route path='/' element={<Home/>}/>
              < Route path='/Cart' element={<Cart/>}/>
              < Route path='/Order' element={<PlaceOrder/>}/>
            </Routes>
          </>
        )
      }
      export default App
