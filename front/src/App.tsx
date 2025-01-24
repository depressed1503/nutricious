import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppRoutes from "@/routes"
import AuthProvider from "@/context/AuthContext"
import { BrowserRouter } from "react-router"

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <AppRoutes/>
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default App
