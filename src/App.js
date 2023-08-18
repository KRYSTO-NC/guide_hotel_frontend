import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import ScrollToTop from './components/shared/ScrollToTop'
import './index.css'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
