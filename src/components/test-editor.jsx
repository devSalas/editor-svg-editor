import { useContext, useRef } from 'react';
import { ImageContext } from '../context/ImageContext';
import { saveAs } from 'file-saver';

const EditorImages = () => {
  const { imageUrl } = useContext(ImageContext);
  const svgRef = useRef(null);

  const handleDownload = () => {
    const svgElement = svgRef.current;
    const svgContent = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    saveAs(blob, 'mi_svg.svg');
  };

  return (
    <div className="bg-primary w-screen h-screen text-red-200 flex flex-col items-center relative">
      <div className="absolute flex flex-col gap-2">
        <h2 className="text-2xl">Editor Image SVG</h2>
        <h3>Opciones</h3>
        <div>
          <button onClick={handleDownload} className="p-2 bg-cyan-500">
            Descargar
          </button>
        </div>
      </div>
      <div className="w-80 m-auto">
        <div ref={svgRef} dangerouslySetInnerHTML={{ __html: imageUrl }} />
      </div>
    </div>
  );
};

export default EditorImages;