import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './features/authentication/login/Login'
import Quiz from './features/Quiz/Quiz'
import Description from './features/description/Description'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './ui/ProtectedRoute'
import Register from './features/authentication/Register/Register'
import OnQuiz from './features/Quiz/OnQuiz'
import Question from './features/Quiz/Question'
import FinishScreen from './ui/FinishScrenn'
import UpdateUser from './features/authentication/UpdateUser/UpdateUser'


function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0
      }
    }
  });
  return (
    <div >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='signup' element={<Register />} />
            <Route element={<ProtectedRoute />}>     
              <Route path='quiz' element={<Quiz />} />
              <Route path='questions/:id' element={<Question />} />
              <Route path='description' element={<Description />} />
              <Route path='quiz/:id' element={<OnQuiz />} />
              <Route path='finish' element={<FinishScreen />} />
              <Route path='Me' element={<UpdateUser />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "black",
            },
          }}
        />
      </QueryClientProvider>
    </div>
  )
}

export default App
