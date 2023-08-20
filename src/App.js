import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import ScrollToTop from './components/shared/ScrollToTop'
import './index.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ProtectedRoute from './pages/Private/ProtectedRoutes'
import AdminHome from './pages/Private/admin/AdminHome'

import AdminTourGuide from './pages/Private/admin/AdminTourGuide/AdminTourGuide'
import AdminPrewiewApp from './pages/Private/admin/AdminPreviewApp/AdminPrewiewApp'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/user" element={<ProtectedRoute />}>
              {/* Routes accessible only to users here */}
            </Route>
            <Route path="/superAdmin" element={<ProtectedRoute />}>
              {/* Routes accessible only to users here */}
            </Route>
            <Route path="/admin" element={<ProtectedRoute />}>
              {/* Routes accessible only to users here */}

              <Route path="/admin/dashboard/home" element={<AdminHome />} />
              <Route
                path="/admin/dashboard/tourGuide"
                element={<AdminTourGuide />}
              />
              <Route path="/admin/app/preview" element={<AdminPrewiewApp />} />
            </Route>
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
