import React, { useRef, useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';  
import './ToolTipTriger.css';

function ToolTipTrigger({ tooltipText }) {
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);
  const [tooltipStyle, setTooltipStyle] = useState({});

  useEffect(() => {
    const adjustTooltipPosition = () => {
      if (containerRef.current && tooltipRef.current) {
        const containerBounds = containerRef.current.getBoundingClientRect();
        const tooltipBounds = tooltipRef.current.getBoundingClientRect();

        let newStyle = {
          top: 'auto',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
        };

        // Si le tooltip dépasse le bas de la fenêtre
        if (tooltipBounds.bottom > window.innerHeight) {
          newStyle.bottom = 'auto';
          newStyle.top = '-100%';
        }

        // Si le tooltip dépasse à droite de la fenêtre
        if (tooltipBounds.right > window.innerWidth) {
          newStyle.transform = 'translateX(-100%)';
        }

        // Si le tooltip dépasse à gauche de la fenêtre
        if (tooltipBounds.left < 0) {
          newStyle.transform = 'translateX(0)';
        }

        setTooltipStyle(newStyle);
      }
    }

    adjustTooltipPosition();
    window.addEventListener('resize', adjustTooltipPosition);

    return () => {
      window.removeEventListener('resize', adjustTooltipPosition);
    }
  }, []);

  return (
    <span className="tooltip-container" ref={containerRef}>
      <span className="tooltip-trigger"><FaInfoCircle /></span>
      <div className="tooltip-text" ref={tooltipRef} style={tooltipStyle}>{tooltipText}</div>
    </span>
  );
}

export default ToolTipTrigger;
