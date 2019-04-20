import React, { useState } from 'react'
import useDataApi from '@/utils/useDataApi'
import Item from './item'

import {
  Place,
  Title,
  Controller
} from './styled'

interface JsonData {
  img: string
  name: string
  state: string
}

export default () => {
  const [data, setData] = useState<JsonData[]>([])
  const {isError, isLoading} = useDataApi('./static/json/place.json', setData)
  return (
    <Place>
      <Title>
        <div>Special Offers</div>
        <div>Best 2014 packages where people love to stay!</div>
      </Title>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <Controller>
            {data.map(item => <Item {...item} key={item.name}></Item>)}
          </Controller>
        )}
    </Place>
  )
}