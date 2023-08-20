import React, { useEffect, useState } from 'react'
import AdminDashScreen from '../AdminDashScreen/AdminDashScreen'
import { useLocation, useNavigate } from 'react-router-dom'
import './adminTourGuide.css'

import Step1 from './steps/Step1/Step1'
import Step2 from './steps/Step2/Step2'
import Step3 from './steps/Step3/Step3'
import Step4 from './steps/Step4/Step4'
import Step5 from './steps/Step5/Step5'
import Step6 from './steps/Step6/Step6'
import Step7 from './steps/Step7/Step7'
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaCheck,
  FaEyeDropper,
  FaEye,
} from 'react-icons/fa'

function AdminTourGuide() {
  
  const [stepIndex, setStepIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation(); 
  // Obtenez l'emplacement actuel
  useEffect(() => {
    // Si l'emplacement a un état 'fromStep', mettez à jour stepIndex avec cette valeur
    if (location.state && location.state.fromStep !== undefined) {
        setStepIndex(location.state.fromStep);
    }
  }, [location]);
  const handleNext = () => {
    if (stepIndex < 6) {
      setStepIndex(stepIndex + 1)
    } else {
      navigate('/admin/dashboard/home')
    }
  }

  const handlePrev = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1)
    }
  }

  const stepsComponents = [Step1, Step2, Step3, Step4, Step5, Step6, Step7]
  const CurrentStepComponent = stepsComponents[stepIndex]

  return (
    <AdminDashScreen>
      <div className="tour-guide-container">
        <div className="tour-guide-content">
          <CurrentStepComponent />
        </div>
        <div className="admin-tour-guide-buttons">
          <button
            className={`btn ${stepIndex === 0 ? 'disabled' : ''}`}
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>
          <button
            className={`btn ${stepIndex === 6 ? 'disabled' : ''}`}
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
          {stepIndex === 6 && (
            <button className="btn btn-ok" onClick={handleNext}>
              <FaCheck /> {/* Icône pour "Terminer" */}
            </button>
          )}
          <button
            className="btn btn-danger"
            onClick={() => navigate('/admin/dashboard/home')}
          >
            <FaTimes /> {/* Icône pour "Quitter le tour" */}
          </button>
          <button
            className="btn btn-preview"
            onClick={() => navigate("/admin/app/preview", { state: { fromStep: stepIndex } })}
          >
         
            <FaEye />
          </button>
        </div>
      </div>
    </AdminDashScreen>
  )
}

export default AdminTourGuide
