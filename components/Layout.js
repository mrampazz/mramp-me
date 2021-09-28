import { useContext } from 'react'
import AppContext from '../utils/AppContext'
import Moon from './icons/Moon'
import Sun from './icons/Sun'

export default function Layout({ children }) {
  const { darkMode, setDarkMode } = useContext(AppContext)

  return (
    <div className={`layout ${darkMode ? 'dark' : 'light'}`}>
      <div className='header'>
        <div className='dark-mode-switch-container'>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
      <div className='page-container'>{children}</div>
    </div>
  )
}
