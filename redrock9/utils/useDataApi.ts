import { useEffect, useState } from 'react'

export default (initialUrl:string, setData:React.Dispatch<React.SetStateAction<any>>) => {
  const [url, setUrl] = useState<string>(initialUrl)
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

  const doFetch = (url:string) => {
    setUrl(url)
  }

  return { isLoading, isError, doFetch }
}