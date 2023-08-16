import { createContext, useState } from 'react';

export const ImageContext = createContext({});

const ImageProvider = ({ children}) => {
  const [imageUrl, setImageUrl] = useState("")
  const [colors, setColors] = useState({
    colorPrimary: 'blue',
    colorSecond: 'red',
    colorThird: 'yellow',
    colorDefault:""
  })
  const data = {
    imageUrl,
    setImageUrl,
    colors,
    setColors
  }
  return (
    <ImageContext.Provider value={data}>
      {children}
    </ImageContext.Provider>
  )
}

export { ImageProvider }
