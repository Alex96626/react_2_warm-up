import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AddUp } from './components/AddUp/AddUp'
import { Jump } from './components/Jump/Jump'
import { DontBeImpudent } from './components/DontBeImpudent/DontBeImpudent'
import { Ticklish } from './components/Ticklish/Ticklish'

createRoot(document.getElementById('root')!).render(

  <>
    <AddUp />
    <Jump />
    <DontBeImpudent />
    <Ticklish />
  </>
)
