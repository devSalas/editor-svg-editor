import { useState } from "react";

function SvgImageUpload() {
  const [svgImage, setSvgImage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSvgImage(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".svg" onChange={handleImageChange} />
      {svgImage && (
        <div>
          <h2>Imagen Cargada</h2>
          <div dangerouslySetInnerHTML={{ __html: svgImage }} />
        </div>
      )}
    </div>
  );
}

export default SvgImageUpload;
