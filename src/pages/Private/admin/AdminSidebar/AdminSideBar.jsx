import { Link, NavLink, useLocation } from 'react-router-dom'
import './adminSideBar.css'
import {
  FaSignOutAlt,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaUsers,
  FaClock,
  FaCog,
} from 'react-icons/fa'
function AdminSideBar() {

    const location = useLocation(); 
  return (
    <adide className="admin-sidebar">
      <div className="round-container">
        <div className="round red"></div>
        <div className="round yellow"></div>
        <div className="round green"></div>
      </div>

      <ul>
        <li>
        <Link to={'/admin/dashboard/home'} className={location.pathname === '/admin/dashboard/home' ? 'activeLink' : ''}>
            <FaHome className="sidebarIcon" />
          </Link>
          <Link to={'/admin/dashboard'}>
            <FaUsers className="sidebarIcon" />
          </Link>
          <Link to={'/admin/dashboard'}>
            <FaEnvelope className="sidebarIcon" />
          </Link>
          <Link to={'/admin/dashboard'}>
            <FaClock className="sidebarIcon" />
          </Link>
          <Link to={'/admin/dashboard'}>
            <FaCog className="sidebarIcon" />
          </Link>
          <Link to={'/admin/dashboard'}>
            <FaInfoCircle className="sidebarIcon" />
          </Link>
          <Link to={'/admin/dashboard'}>
            <FaSignOutAlt className="sidebarIcon" />
          </Link>
        </li>
      </ul>
    </adide>
  )
}

export default AdminSideBar
