import { useEffect, useState } from "react"

export default function useWidth() {

  const [width, setWidth] = useState(() => window.innerWidth)
  const handleWindowResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      console.log('window cleanup')
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return { width }
}