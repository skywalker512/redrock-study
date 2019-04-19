import React, { useEffect, useState, Fragment } from 'react'

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
  const [url] = useState<string>('./static/json/place.json')
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