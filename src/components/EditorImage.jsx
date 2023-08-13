import { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

const EditorImage = () => {
  const {imageUrl} = useContext(ImageContext);
  
  return (
    <div className="bg-primary  w-screen h-screen text-red-200">
      <h2 className='text-2xl'> Editor Image SVG</h2>
      <div className='w-80 '>
        <div dangerouslySetInnerHTML={{ __html: imageUrl }} />
      </div>
    </div>
  );
};

export default EditorImage;
