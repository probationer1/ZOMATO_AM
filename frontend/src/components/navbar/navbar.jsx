                    import React, { useContext, useState } from 'react'
                    import './Navbar.css';
                    import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
                    const Navbar = ({setshowlogin}) =>{
                        const [menu,setMenu]= useState("home");
                        const {getTotalCartAmount}=useContext(StoreContext);
                    return(
                        <div className='navbar'>
                        <link to='/'><img src={assets.logo} alt="" className="logo" /></link>


                    <ul className="navbar-menu">
                            <li onClick={()=>setMenu("home")} className= {menu=="home"?"active":""}>home</li>
                            <li onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""}>menu</li>
                            <li onClick={()=>setMenu("mobile-app")}className={menu=="mobile-app"?"active":""}>mobile-app</li>
                            <li onClick={()=>setMenu("contact-us")}className={menu=="contact-us"?"active":""}>contact us</li>
                        </ul>
                        <div className="navbar-right">
                            <img src={assets.search_icon} alt="" />
                            <div className="navbar-search-icon">

                                <link to='/cart'><img src={assets.basket_icon} alt="" /></link>
                                <div className={getTotalCartAmount()===0?"":"dot"}></div>
                                </div>
                            <button onClick={()=>setshowlogin(true)}>sign in</button>

                        </div>
                        </div>
                    )
                    } 
                    

                    export default Navbar