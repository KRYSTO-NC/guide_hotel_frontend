import {
  FaAmbulance,
  FaBell,
  FaBicycle,
  FaClock,
  FaCloudSun,
  FaConciergeBell,
  FaEnvelope,
  FaEtsy,
  FaHamburger,
  FaHotel,
  FaLandmark,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaRegClock,
  FaServicestack,
  FaStore,
  FaTable,
  FaTachometerAlt,
  FaUtensilSpoon,
} from 'react-icons/fa'
import './preview.css'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Arrival from './Arrival/Arrival'
import Services from './Services/Services'
import Urgences from './Urgences/Urgences'
import Meteo from './Meteo/Meteo'
import Tourisme from './Tourisme/Tourisme'
import LoisirProximity from './LoisirProximity/LoisirProximity'
import Commodite from './Commodite/Commodite'
import Restaurant from './Restaurant/Restaurant'
import FoodProximity from './FoodProximity/FoodProximity'
import Departure from './Departure/Departure'
import frenchDrap from '../../../../../assets/fr-drap.png'

function Preview() {
  const [activeComponent, setActiveComponent] = useState('default')

  const handleLinkClick = (componentName) => {
    setActiveComponent(componentName)
  }

  const location = useLocation()
  return (
    <>
      <header className="headerPrev">
        <div className="part1">
          <div>Votre logo</div>
          <div>
            <FaHotel />
          </div>
        </div>
        <div className="part2">Welcom hôtel</div>
        <div className="part3">
          <div className="french">
            <img src={frenchDrap} alt="" />
          </div>
          <div className="notification">
            <FaBell />
          </div>
          <div className="messages">
            <FaEnvelope />
          </div>
        </div>
      </header>
      <div className="previewContainer">
        <aside className="previewAside">
          <ul>
            <hr />
            <li>
            <Link 
              onClick={() => handleLinkClick('default')} 
              className={activeComponent === 'default' ? 'activeprevLink' : ''}  // Condition pour ajouter la classe
            >
              <p>Votre arivée</p>
              <FaPlaneArrival />
            </Link>
            </li>
            <hr className="hr" />
            <li>
              <Link onClick={() => handleLinkClick('urgences')}
              className={activeComponent === 'urgences' ? 'activeprevLink' : ''}  >
                <p>Urgences</p>
                <FaAmbulance />
              </Link>
            </li>
            <hr className="hr" />
            <li>
              <Link onClick={() => handleLinkClick('meteo')}
               className={activeComponent === 'meteo' ? 'activeprevLink' : ''}  >
                <p>Météo</p>
                <FaCloudSun />
              </Link>
            </li>
            <hr className="hr" />
            <li>
              <Link onClick={() => handleLinkClick('tourisme')}
               className={activeComponent === 'tourisme' ? 'activeprevLink' : ''}  >
                <p>Tourisme</p>
                <FaLandmark />
              </Link>
            </li>
            <hr className="hr" />
            <li>
              <Link onClick={() => handleLinkClick('loisirs')}
               className={activeComponent === 'loisirs' ? 'activeprevLink' : ''}  >
                <p>Loisirs aux environs</p>
                <FaBicycle />
              </Link>
            </li>
            <hr className="hr" />
            <li>
              <Link onClick={() => handleLinkClick('commodites')}
               className={activeComponent === 'commodites' ? 'activeprevLink' : ''}  >

                <p>Commodités à proximité</p>
                <FaStore />
              </Link>
            </li>
            <hr className="hr" />
            <li>
              <Link onClick={() => handleLinkClick('restaurant')}
               className={activeComponent === 'restaurant' ? 'activeprevLink' : ''}  >

                <p>Notre restaurant</p>
                <FaUtensilSpoon />
              </Link>
            </li>
            <hr className="hr" />
            <li>
              <Link onClick={() => handleLinkClick('services')}
               className={activeComponent === 'services' ? 'activeprevLink' : ''}  >

                <p>Services sur place</p>
                <FaConciergeBell />
              </Link>
            </li>
            <hr className="hr" />
            <li>
              <Link onClick={() => handleLinkClick('foodProximity')}
               className={activeComponent === 'foodProximity' ? 'activeprevLink' : ''}  >

                <p>Manger aux environs</p>
                <FaHamburger />
              </Link>
            </li>
            <hr className="hr" />
            <li>
              <Link onClick={() => handleLinkClick('departure')}
               className={activeComponent === 'departure' ? 'activeprevLink' : ''}  >

                <p>Votre départ</p>
                <FaPlaneDeparture />
              </Link>
            </li>
          </ul>
        </aside>
        <div className="previewContent">
          {activeComponent === 'default' && <Arrival />}
          {activeComponent === 'urgences' && <Urgences />}
          {activeComponent === 'meteo' && <Meteo />}
          {activeComponent === 'tourisme' && <Tourisme />}
          {activeComponent === 'loisirs' && <LoisirProximity />}
          {activeComponent === 'commodites' && <Commodite />}
          {activeComponent === 'restaurant' && <Restaurant />}
          {activeComponent === 'services' && <Services />}
          {activeComponent === 'foodProximity' && <FoodProximity />}
          {activeComponent === 'departure' && <Departure />}
        </div>
      </div>
    </>
  )
}

export default Preview
