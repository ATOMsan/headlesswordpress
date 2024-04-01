import React from 'react'
import { AppRouter } from 'components/router'
import { WpAuthProvider } from 'services/auth/WpAuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <WpAuthProvider>
        <AppRouter />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </WpAuthProvider>
    </ErrorBoundary>
  )
}

export default App
