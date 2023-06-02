import React from 'react'
import icons from '../ultis/icons'
import './componentsCss/Header.scss'
import Search from './Search'

const{BsArrowLeft,BsArrowRight} = icons
const Header = () => {
  return (
    <div className='home-header'>
        <div className='header-left'>
            <div>
                <BsArrowLeft size={24}/>
            </div>
            <div>
                <BsArrowRight size={24}/>
            </div>
            <div>
                <Search/> 
            </div>
        </div>
        <div>Dang nhap</div>
    </div>
  )
}

export default Header