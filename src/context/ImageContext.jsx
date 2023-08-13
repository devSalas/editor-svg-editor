import { createContext, useState } from 'react';

 export const ImageContext = createContext({});

const ImageProvider = ({children})=>{
  const [imageUrl,setImageUrl]=useState("")
  const data={
    imageUrl,
    setImageUrl
  }
  return(
    <ImageContext.Provider value={data}>
      {children}
    </ImageContext.Provider>
    )
}

export {ImageProvider}
