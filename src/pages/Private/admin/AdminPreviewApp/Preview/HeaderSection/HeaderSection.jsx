import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

import './HeaderSection.css'
import SearchBarSection from './SearchBarSection'
function HeaderSection({ title }) {
  return (
    <div className="headerSection">
      <div className="backIcone">
        <FaArrowAltCircleLeft />
        <h3>{title}</h3>
      </div>

      <SearchBarSection />
      
    </div>
  )
}

export default HeaderSection
