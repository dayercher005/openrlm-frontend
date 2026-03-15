import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login.tsx'
import { Conversations } from './components/chat/conversations.tsx'
import ChatInput from '@/components/chat/input.tsx'
import App from './pages/main.tsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/log-in" Component={ LoginPage }></Route>
        <Route path="/" Component={ App }>
          <Route index Component={ ChatInput } />
          <Route path="/conversations" Component={Conversations} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
