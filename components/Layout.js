import { useContext } from 'react'
import AppContext from '../utils/AppContext'

export default function Layout({ children }) {
  const { darkMode, setDarkMode } = useContext(AppContext)

  return (
    <div className='layout'>
      <div className='header'></div>
      <div className='page-container'>{children}</div>
    </div>
  )
}
