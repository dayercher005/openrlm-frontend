import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login.tsx'
import { ConversationList } from './pages/conversationList.tsx'
import { Conversation } from './pages/conversation.tsx'
import { ConversationCreate } from './pages/conversationCreate.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './pages/main.tsx'
import './styles/index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/log-in" Component={ LoginPage }></Route>
          <Route path="/" Component={ App }>
            <Route index Component={ ConversationCreate } />
            <Route path="/conversations" Component={ ConversationList } />
            <Route path="/conversations/:id" Component={ Conversation } />
          </Route>
        </Routes>
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
