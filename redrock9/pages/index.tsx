import React, { Fragment } from "react"

import { GlobalStyle } from '@/styled/global'
import { Header }  from '@/components/index'
import { Carousel } from "@/components/carousel/styled";

export default () => {
  return (
    <Fragment>
      <GlobalStyle />
          <Header></Header>
          <Carousel></Carousel>
    </Fragment>
  )
}
