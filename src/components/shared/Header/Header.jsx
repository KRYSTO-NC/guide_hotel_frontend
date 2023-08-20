import { FaSignOutAlt, FaHome, FaPuzzlePiece, FaMoneyBillWave, FaInfoCircle, FaEnvelope, FaSignInAlt, FaUsers, FaBuilding, FaClock, FaComments, FaCog, FaMobileAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../../features/auth/authSlice';
import './header.css';
import { getProfil } from '../../../features/user/userSlice';
import { useEffect } from 'react';




function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { profil } = useSelector((state) => state.user);

  const hasProfilData = profil && profil.data;

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };

  useEffect(() => {
    dispatch(getProfil());
  }, [dispatch]);

  if (!user) {
    return (
      <header className="header transparant">
 
        <ul>
          <li><Link to={'/'}><FaHome /> Accueil</Link></li>
          <li><Link to={'/solution'}><FaPuzzlePiece /> La solution</Link></li>
          <li><Link to={'/tarifs'}><FaMoneyBillWave /> Tarifs</Link></li>
          <li><Link to={'/about'}><FaInfoCircle /> A propos</Link></li>
          <li><Link to={'/contact'}><FaEnvelope /> Nous contacter</Link></li>
          <li><Link to={'/login'}><FaSignInAlt /> Connection</Link></li>
        </ul>
      </header>
    );
  }

  if (!hasProfilData) {
    return <h1>Chargement...</h1>;
  }

  if (profil.data.role === 'admin') {
    return (
      <>
      </>
    //  <h1>sidebard</h1>
    );
  } else if (profil.data.role === 'superAdmin') {
    return (
      <header className="header">
        <ul>
          <li><Link to={"/superAdmin/home"}><FaHome /> Accueil SuperAdmin</Link></li>
          {/* Ajoutez d'autres liens spécifiques pour superAdmin ici */}
        </ul>
       
      </header>
    );
  } else {  // Assumant que c'est le rôle 'user'
    return (
      <header className="header">

        <ul>
          <li><Link to={"/user/home"}><FaHome /> Accueil</Link></li>
          <li><Link to={"/user/messages"} ><FaComments /> Messages</Link></li>

        </ul>
        
      </header>
    );
  }
}

export default Header;