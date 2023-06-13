import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Pages/Routes/Routes.jsx'
import AuthProviders from './Pages/Providers/AuthProviders'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <QueryClientProvider client={queryClient}>
        <AuthProviders>
          <RouterProvider router={router} />
        </AuthProviders>
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
