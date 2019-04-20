import React, { useEffect, useState } from 'react'

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
  const [url] = useState<string>('./static/json/type.json')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    let didCancel = false

    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await fetch(url)
        if (!didCancel) {
          result.json().then(res => setData(res))
        }
      } catch (error) {
        if (!didCancel) {
          setIsError(true)
        }
      }
      setIsLoading(false)
    }
    fetchData()
    return () => {
      didCancel = true
    }
  }, [url])
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
            {data.map(item => <Item {...item} key={item.name}></Item>)}
          </Controller>
        )}
    </Place>
  )
}