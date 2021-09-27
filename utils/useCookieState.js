import { useCallback, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'

export default function useCookieState(key, initialValue) {
  const [cookieState, origSetCookieState] = useState(() => {
    const cookie = parseCookies()[key]
    if (cookie) {
      return JSON.parse(cookie)
    }
    return initialValue
  })

  const setCookieState = useCallback(
    (value) => {
      origSetCookieState(value)
      setCookie(null, key, JSON.stringify(value))
    },
    [key]
  )

  return [cookieState, setCookieState]
}
