import React from 'react'
import '../../styles/Header.css'
import logo from '../../assets/image/1st.jpg'
import main_logo from '../../assets/image/logo.png'
import mobile_menu from '../../assets/image/menu.png'

const nav_links=[
    {
        path:'#',
        display:'Home'
    },
    {
        path:'#',
        display:'Projects'
    },
    {
        path:'#',
        display:'Resume'
    },
    {
        path:'#',
        display:'Tutorial'
    },
    {
        path:'#',
        display:'Blog'
    },
    {
        path:'#',
        display:'Contact'
    }
]

export const Header = () => {
  return (
    <header className="header">
        {/* main_logo */}
        <div className="main_logo">
                <img src={main_logo} alt="" width={"270px"} height={"60px"}/>
            </div>
{/* ========================================================= */}

        <div className="container">

        

            <div className="nav_wrapper">


            {/* Logo making */}
            <div className="logo">
                <div className="logo_img"><img src={logo} alt="code learner" width={"500px"} height={"500px"}/>
                
                </div>
{/* ========================================================= */}

            {/* navigation menu */}
                <div className="navigation">
                    <ul className="menu">
                        {
                            nav_links.map(item=>(<li className="nav_item">
                                <a href={item.path}>{item.display}</a>
                            </li>
                                ))
                        }

                    </ul>
                </div>
{/* ========================================================= */}

                {/* navigation */}
                <div className="nav_right">
                    <button className="register_btn">Register</button>
                    
                </div>
{/* ========================================================= */}
            </div>
            </div> 
        </div>
    </header>
  )
}
