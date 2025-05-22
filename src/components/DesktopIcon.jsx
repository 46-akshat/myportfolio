import React from 'react';
import './DesktopIcon.css';

const DesktopIcon = ({ icon, label, link, onDoubleClick }) => {
  const handleClick = () => {
    if (link) window.open(link, '_blank');
  };

  return (
    <div
      className="desktop-icon"
      onDoubleClick={onDoubleClick || handleClick}
      tabIndex={0}
      title={label}
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default DesktopIcon;
