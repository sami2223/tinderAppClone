import React from 'react'
import "./Header.css"
import {Person} from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import ForumIcon from '@material-ui/icons/Forum'

function Header() {
  return (
    <div className='header'>
        
        <IconButton>
        <Person className='header__icon' fontSize='large'/>
        </IconButton>

        <img className='header__logo' src="/tinder_logo.png" alt="" />
        <IconButton>
        <ForumIcon fontSize='large' className='header__icon'/>
        </IconButton>
    </div>
  )
}

export default Header

