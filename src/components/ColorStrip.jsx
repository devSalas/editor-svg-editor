import { useContext } from "react"
import { ImageContext } from "../context/ImageContext"
import Color from "./Color"

const ColorStrip=()=>{
  const {colors} =useContext(ImageContext)
  console.log(colors)
  return( 
    <div className="absolute w-40 h-80 border-2 right-0 top-1/4  mr-10  " >
      <Color colorInitial={colors.colorPrimary} order={1} />
      <Color colorInitial={colors.colorSecond} order={2}/>
      <Color colorInitial={colors.colorThird} order={3}/>
    </div>
    
  )
}

export default ColorStrip