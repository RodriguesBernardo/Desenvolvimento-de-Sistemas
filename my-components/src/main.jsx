import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PrimeiroComponente from './componentes/PrimeiroComponente.jsx'

import './index.css'
import { CompA } from './componentes/DoisComponente.jsx'
import MuitiElementos from './componentes/MuitiElementos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MuitiElementos></MuitiElementos>
  </StrictMode>,
)
