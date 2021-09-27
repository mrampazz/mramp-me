import { useCallback, useEffect, useState } from 'react'

export default function useFetcher(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetch = useCallback(async () => {
    setLoading(true)
    try {
      const res = await window.fetch(url)
      setData(res)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }, [url])

  useEffect(() => fetch(), [])

  return { data, loading, error }
}
