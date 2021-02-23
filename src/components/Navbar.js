import React,{useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar,setSidebar]=useState(false);

    const showSidebar = () => setSidebar(!sidebar); 
    return (
        <>
        <IconContext.Provider value={{ color:'#fff' }} >
            <div className="navbar">

                <Link to="#" className='menu-bars hidden-lg'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>

                <img className='logo-container' src={require('../images/logo1.png')} alt="Logo" />

                    {SidebarData.map((item,index) => {
                        return(
                            <li key={index} className={`${item.cName}`+' hidden-xs'} >
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}

            </div>
            <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' } >
                <ul className='nav-menu-items'  onClick={showSidebar} >
                    {SidebarData.map((item,index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar