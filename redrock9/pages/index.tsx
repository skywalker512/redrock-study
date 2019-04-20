import React, { Fragment } from "react"

import { GlobalStyle } from '@/styled/global'
import { Header, Carousel, Search, Place, Type }  from '@/components/index'

export default () => {
  return (
    <Fragment>
      <GlobalStyle />
          <Header></Header>
          <Carousel></Carousel>
          <Search></Search>
          <Place></Place>
          <Type></Type>
    </Fragment>
  )
}
