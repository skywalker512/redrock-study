import React, { useState, Fragment } from 'react'
import useDataApi from '@/utils/useDataApi'

import {
  Place,
  Title,
  Controller
} from './styled'

interface JsonData {
  name: string
  img: string
}

export default () => {
  const [data, setData] = useState<JsonData[]>([])
  const { isError, isLoading } = useDataApi('./static/json/type.json', setData)
  return (
    <Place>
      <Title>
        <div>Holidays Type</div>
        <div>get explore your dream to travel the world!</div>
      </Title>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <Controller>
            {data.map(item => (
              <div key={item.name}>
                <img src={item.img}/>
                <div>{item.name}</div>
              </div>
              
            ))}
          </Controller>
        )}
    </Place>
  )
}