import React from 'react'
//import './App.css';
import './DesktopIcon.css';

const DesktopIcon = ({icon,label,link}) => {
  return (
    <div className='desktop-icon' onClick={() =>{
        if( (link)) window.open(link,'_blank');
    }}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  )
}

export default DesktopIcon
