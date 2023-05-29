import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/MainRoute.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Providers/AuthProvider.jsx'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}></RouterProvider>
            </QueryClientProvider>

        </HelmetProvider>
    </AuthProvider>
)
