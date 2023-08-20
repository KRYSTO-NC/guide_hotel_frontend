import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomer } from '../../../features/customer/customerSlice';
import AdminDashScreen from './AdminDashScreen/AdminDashScreen';
import { Link } from 'react-router-dom';


function AdminHome() {
  const dispatch = useDispatch();

  const {
    customer,
    isLoading,
    isError,
    errorMessage,
  } = useSelector((state) => state.customer);

  useEffect(() => {
    const customerId = JSON.parse(localStorage.getItem('userCustomer'));

    if (customerId) {
      dispatch(getCustomer(customerId));
    }
  }, [dispatch]);

  if (isLoading) {
    return <div>Chargement des informations...</div>;
  }

  if (isError) {
    return <div>Oops! Quelque chose s'est mal passé: {errorMessage}</div>;
  }

  return (
    <AdminDashScreen>
      <h1>Bienvenue à l'administration de Guide Hotel NC !</h1>
      {customer.data && !customer.data.isConfigured && (
        <>
          <p>Nous sommes ravis que vous ayez choisi Guide Hotel NC pour accompagner votre établissement. Afin d'offrir la meilleure expérience à vos clients, commençons par personnaliser votre guide.</p>
      
      <Link to={'/admin/dashboard/tourGuide'}>
          <button  className='btn btn-block btn-reverse'>Lancez le guide de configuration étape par étape</button>
      </Link>
        </>
        
      )}
     
    </AdminDashScreen>
  );
}

export default AdminHome;
