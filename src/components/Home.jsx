import { ImageContext } from '../context/ImageContext';
import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const {setImageUrl}=useContext(ImageContext)

  const handleChange = (e) => {
    const file = e.target.files[0]
    console.log({file})
     if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const redirectToOtherPage = (e) => {
    e.preventDefault();
    console.log('hola');
    return navigate('/editor');
  };

  return (
      <div className="h-screen w-screen flex flex-col  items-center relative">
        
        <h1 className='text-4xl absolute md:pt-28'>Change your color Image</h1>
        <div className='m-auto'>
          <form onSubmit={redirectToOtherPage} className='flex flex-col'>
            
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
            <input onChange={handleChange}  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2" type="file"/>

            <button type="submit" className='bg-cyan-500 mt-4 p-2 rounded-md'>comenzar</button>
          </form>
        </div>  
      </div>
  );
};

export default Home;
