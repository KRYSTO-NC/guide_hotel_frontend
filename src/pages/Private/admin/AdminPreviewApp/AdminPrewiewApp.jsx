import AdminDashScreen from '../AdminDashScreen/AdminDashScreen';
import './AdminPrewiewApp.css';
import ipad from '../../../../assets/tablet.svg';

import Preview from './Preview/Preview';
import { useNavigate, useLocation } from 'react-router-dom'; // Ajoutez useLocation

function AdminPrewiewApp() {
  const navigate = useNavigate();
  const location = useLocation(); // Obtenez l'emplacement actuel

  const handleBackToGuide = () => {
    // Utilisez l'état 'fromStep' pour naviguer vers l'étape appropriée
    if (location.state && location.state.fromStep !== undefined) {
      navigate('/admin/dashboard/tourGuide', { state: { fromStep: location.state.fromStep } });
    } else {
      navigate('/admin/dashboard/tourGuide');
    }
  }

  return (
    <AdminDashScreen>
      
      <button
        className="btn btn-block btn-back-guide"
        onClick={handleBackToGuide} 
      >
        Retour au guide
      </button>
      <div className="ipadContainer">
        
        <img className="ipadL" src={ipad} alt="iPad" />
        <div className="appPreview">
          <Preview />
        </div>
      </div>
      
    </AdminDashScreen>
  );
}

export default AdminPrewiewApp;
