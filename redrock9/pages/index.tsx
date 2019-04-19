import React, { Fragment } from "react"

import { GlobalStyle } from '@/styled/global'
import { Header, Carousel, Search, Place }  from '@/components/index'

export default () => {
  return (
    <Fragment>
      <GlobalStyle />
          <Header></Header>
          <Carousel></Carousel>
          <Search></Search>
          <Place></Place>
    </Fragment>
  )
}
