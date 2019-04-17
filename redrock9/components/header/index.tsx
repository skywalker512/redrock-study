import React from 'react'
import { 
  Header,
  Top,
  Nav,
  Logo,
  Menu,
  Search,

} from './styled'

import UserIcon from '@/assets/svg/user.svg'
import FileIcon from '@/assets/svg/file-o.svg'
import FaceBookIcon from '@/assets/svg/facebook.svg'
import TwitterIcon from '@/assets/svg/twitter.svg'
import TumblrIcon from '@/assets/svg/tumblr.svg'
import PinterestIcon from '@/assets/svg/pinterest.svg'
import SearchIcon from '@/assets/svg/search.svg'

export default () => {
  return (
    <Header>
      <Top>
        <div>
          <a><UserIcon /><span>Agent Login</span></a>
          <a><UserIcon /><span>Customer Login</span></a>
          <a><FileIcon /><span>Customer Login<span className='link'>Register?</span></span></a>
          <a><span>Call Us Now: 815-123-4567</span></a>
        </div>
        <div>
          <a><FaceBookIcon /></a>
          <a><TwitterIcon /></a>
          <a><TumblrIcon /></a>
          <a><PinterestIcon /></a>
        </div>
      </Top>
      <Nav>
        <Logo>V<span>O</span>YAGE</Logo>
        <Menu>
          <a>Home</a>
          <a>Destinations</a>
          <a>Criuses</a>
          <a>Specials</a>
          <a>Holidays</a>
          <a>Blog</a>
          <Search><SearchIcon viewBox="0 0 15 16" preserveAspectRatio="xMaxYMax meet"/></Search>
        </Menu>
      </Nav>
    </Header>
  )
}