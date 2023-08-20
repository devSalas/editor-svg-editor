import { useContext,useRef} from 'react';
import { ImageContext } from '../context/ImageContext';
import ColorStrip from './ColorStrip';
import { Link } from 'react-router-dom';
const EditorImage = () => {
  const {imageUrl,colors} = useContext(ImageContext);
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
    
    <div className=" w-screen h-screen text-black-500 flex flex-col items-center relative max-w-7xl m-auto font-serif">
      
        <h2 className='text-4xl mt-10 font-extrabold'> Editor de Color Imagen SVG</h2>

        <Link to={"/"} className='absolute top-1/4 left-10 cursor-pointer flex '>
       {/*  <div > */}
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"    fill="none" viewBox="0 0 8 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
        </svg>
        <span>Back</span> 
        {/* </div> */}
        </Link>
      <div className='w-80 m-auto'>
        <div  onClick={handleClick} ref={svgRef} dangerouslySetInnerHTML={{ __html: imageUrl }} />
      </div>
      <ColorStrip/>
      <div className='absolute bottom-0 right-0 overflow-hidden  rounded-2xl bg-white mr-10 mb-10 grid grid-cols-2  '>
        <p className='px-4 py-2'>Gratis</p><div onClick={downloadImage} className='bg-black text-white px-4 py-2 rounded-2xl cursor-pointer'>Descargar</div> 
      </div>

    </div>
  );
};

export default EditorImage;
