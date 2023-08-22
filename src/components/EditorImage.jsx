import { useContext,useRef} from 'react';
import { ImageContext } from '../context/ImageContext';
import ColorStrip from './ColorStrip';
import { Link } from 'react-router-dom';
import useZoomableImage from '../Hook/useZoomableImage';

const EditorImage = () => {
  const {imageUrl,colors} = useContext(ImageContext);
  const {zoomLevel,handleZoomIn,handleZoomOut} = useZoomableImage()
  const svgRef = useRef(null);

  const handleClick = (e)=>{
    const tagImage= e.target
    tagImage.style.fill =colors.colorDefault;
    
  }

  const downloadImage=()=>{
    const svgElement = svgRef.current;
    const svgContent = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgContent], { type: 'image/svg+xml' })

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'mi_svg.svg';

    link.addEventListener('load', () => {
      // Revocar la URL una vez que se haya iniciado la descarga
      URL.revokeObjectURL(link.href);
    });

    link.click();
  }
  return (
    
    <div className=" w-screen h-screen overflow-hidden text-black-500 flex flex-col items-center relative max-w-7xl m-auto font-serif">
      
        <h2 className='text-4xl mt-10 font-extrabold relative  z-20 text-slate-600'> Editor de Color Imagen SVG</h2>
        <div className='absolute top-1/4 left-10 cursor-pointer flex flex-col items-center gap-4 z-20'>
        <Link to={"/"} className="flex gap-2 mb-8" >
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"    fill="none" viewBox="0 0 8 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
        </svg>
        <span>Back</span> 
        </Link>
        <svg onClick={handleZoomIn} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4M5 8h6m-3 3V5m7 3A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <svg onClick={handleZoomOut} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4M5 8h6m4 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>  
    
      </div> 
      <div className='w-80 m-auto'>
        <div  onClick={handleClick}  ref={svgRef} dangerouslySetInnerHTML={{ __html: imageUrl }} style={{ transform: `scale(${zoomLevel})` }} />
      </div>
      <ColorStrip/>
      <div className='absolute bottom-0 right-0 overflow-hidden  rounded-2xl bg-white mr-10 mb-10 grid grid-cols-2  '>
        <p className='px-4 py-2'>Gratis</p><div onClick={downloadImage} className='bg-black text-white px-4 py-2 rounded-2xl cursor-pointer'>Descargar</div> 
      </div>

    </div>
  );
};

export default EditorImage;
