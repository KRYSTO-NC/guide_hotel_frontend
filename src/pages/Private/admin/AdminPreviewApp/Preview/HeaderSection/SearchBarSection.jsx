import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './HeaderSection.css';

function SearchBarSection() {
  return (
    <div className='searchBarSectionContainer'>
        <FaSearch className='searchIcon' />
        <input type="text"  placeholder='Rechercher'/>
    </div>
  );
}

export default SearchBarSection;
