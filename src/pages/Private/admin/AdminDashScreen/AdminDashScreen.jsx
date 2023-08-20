import AdminSideBar from '../AdminSidebar/AdminSideBar'
import './adminDashScreen.css'

function AdminDashScreen({children}) {
  return (
    <div className='admin-dashbord'>
    <AdminSideBar/>
    <main className='dashboard-screen' >
      {children}
    </main>
    </div>
  )
}

export default AdminDashScreen