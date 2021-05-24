import { useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"

export default function useLang(lang, setLang) {
  const history = useHistory()

  const firstMount = useRef(true)

  function handleLang() {
    setLang(lang => !lang)
  }


  useEffect(() => {
    // prevents first run on mount //
    if (firstMount.current) {
      firstMount.current = false;
      return
    }
    console.log(lang)
    const splitUrl = history.location.pathname.split('/')
    const newUrl = splitUrl[splitUrl.length - 1]
    // lang true means english routes
    if (lang) {
      console.log(`/${newUrl}`)
      return history.push(`/${newUrl}`)
    }
    // lang false means /fi routes
    if (!lang) {
      return history.push(`/fi/${newUrl}`)
    }
    return () => { console.log('lang cleaned') }
  }, [lang])

  return { lang, handleLang }
}