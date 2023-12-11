import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={router} />
  )
})
