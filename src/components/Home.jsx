import { ImageContext } from '../context/ImageContext';
import { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  const navigate = useNavigate();
  const { setImageUrl} = useContext(ImageContext);
  const [nameImage,setNameImage] = useState("")

  const handleChange = (e) => {
    const file = e.target.files[0];
    setNameImage(file.name)
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result)
        setImageUrl(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const redirectToOtherPage = (e) => {
    e.preventDefault();
    return navigate('/editor');
  };

  return (
    <div className="h-screen w-screen bg-hero bg-contain bg-no-repeat bg-center flex flex-col  items-center relative font-serif">
      <h1 className="text-4xl absolute md:pt-28 text-center"> Con un Click cambie los colores de su imagen SVG</h1>
      <div className="m-auto ">
        <form onSubmit={redirectToOtherPage} className=" relative flex flex-col justify-center items-center min-w-[250px] max-w-xs">
          <div className="bg-white w-full py-4  rounded-lg relative  flex justify-center items-center gap-3 z-20   hover:border-black hover:border-2 box-content ">
            <input
              onChange={handleChange}
              className="absolute  left-0 top-0 w-full h-full opacity-0 cursor-pointer  "
              type="file"
            />
            <label htmlFor="" className="">
             {nameImage=="" ?"Seleccionar archivo" :nameImage }
            </label>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 20 20">
                <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z"/>
              </svg>
          </div>
          <button
            type="submit"
            className="bg-black text-white mt-4 py-3 rounded-md z-20 w-full"
          >
            comenzar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
