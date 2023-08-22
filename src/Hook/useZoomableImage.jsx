import  { useState } from 'react';

const useZoomableImage = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    if(zoomLevel > 1.6 ) return
    setZoomLevel(prevZoomLevel => prevZoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    if(zoomLevel<0.6) return
    setZoomLevel(prevZoomLevel => prevZoomLevel - 0.1);
  };

  return {zoomLevel,handleZoomIn, handleZoomOut}
  
  
};

export default useZoomableImage;
