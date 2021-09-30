import { useContext } from 'react'
import AppContext from '../utils/AppContext'

export default function Layout({ children }) {
  return (
    <div className={`layout`}>
      <div className='page-container'>{children}</div>
    </div>
  )
}
