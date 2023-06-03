import React from 'react'
import logo from'../acssets/logo.svg'
import'./componentsCss/SidebarLeft.scss'
import { sidebarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'

const SidebarLeft = () => {
  return (
    <div className='sidebarLeft-container'>
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='sidebar-btn'>
        {sidebarMenu.map((item,index)=>(
          <NavLink
            to={item.path}
            className='sidebar-btn_a'
            key={index}
          >
            {item.icons}
            <span>{item.text}</span>
          </NavLink>
        ))} 
      </div>
    </div>
  )
}

export default SidebarLeft