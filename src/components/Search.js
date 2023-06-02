import React from 'react'
import './componentsCss/Search.scss'
import icons from '../ultis/icons'
const {BsSearch} = icons
const Search = () => {
  return (
    <div className='Search-container'>
        <span className='icon-search'><BsSearch size={20}/></span>
        <input
            type='text'
            className='input-search'
            placeholder='Nhập tên ca sĩ, lời bài hát...'
        />
    </div>
  )
}

export default Search