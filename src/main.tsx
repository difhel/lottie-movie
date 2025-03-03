import { createRoot } from 'react-dom/client'
import './index.module.scss'
import App from './App.tsx'

import '@telegram-apps/telegram-ui/dist/styles.css';

createRoot(document.getElementById('root')!).render(
  <App />
)
