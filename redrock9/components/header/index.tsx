import React from 'react'
import { Header, Nav, Item } from './styled'

import UserIcon from '@/assets/svg/user.svg'
import FileIcon from '@/assets/svg/file-o.svg'
import FaceBookIcon from '@/assets/svg/facebook.svg'
import TwitterIcon from '@/assets/svg/twitter.svg'
import TumblrIcon from '@/assets/svg/tumblr.svg'
import PinterestIcon from '@/assets/svg/pinterest.svg'

export default () => {
  return (
    <Header>
      <Nav>
        <div>
          <Item>
            <UserIcon />
            <span>Agent Login</span>
          </Item>
          <Item>
            <UserIcon />
            <span>Customer Login</span>
          </Item>
          <Item>
            <FileIcon />
            <span>Customer Login<span className='link'>Register?</span></span>
          </Item>
          <Item>
            <span>Call Us Now: 815-123-4567</span>
          </Item>
        </div>
        <div>
          <Item>
            <FaceBookIcon />
          </Item>
          <Item>
            <TwitterIcon />
          </Item>
          <Item>
            <TumblrIcon />
          </Item>
          <Item>
            <PinterestIcon />
          </Item>
        </div>
      </Nav>
    </Header>
  )
}