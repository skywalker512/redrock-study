import React, { Fragment } from "react"

import { GlobalStyle } from '@/styled/global'
import { Header }  from '@/components/index'

export default () => {
  return (
    <Fragment>
      <GlobalStyle />
          <Header></Header>
    </Fragment>
  )
}
