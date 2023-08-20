import  { useContext, useState } from 'react'
import { ImageContext } from '../context/ImageContext'

const Color = ({colorInitial}) => {
  const {setColors} =useContext(ImageContext)
  const [color,setColor]=useState(colorInitial)



  const handleKeyDown =(e)=>{
    setColor(e.target.value)
  }

  const handleClick=()=>{
    setColors(prev=>({...prev,colorDefault:color}))
  }


  return( 
    <div onClick={handleClick} className="w-full h-10 bg-white rounded-2xl pl-4 flex  justify-start items-center gap-3 mb-2 cursor-pointer">
      <div  style={{backgroundColor:color ?color :colorInitial}}  className={`w-8 aspect-square rounded-full `}  >
      </div>  
      <input onChange ={handleKeyDown} type="text" value={color} className="w-3/6 focus:outline-none hover:border-b-2 hover:border-black" placeholder={colorInitial}/>
    </div>
  )
}

export default Color

