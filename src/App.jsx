import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import EditorImage from "./components/EditorImage"
import { ImageProvider } from "./context/ImageContext"
import ZoomableImage from "./Hook/useZoomableImage"




function App() {

  return (
    <>
    <ImageProvider>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/editor"  element={<EditorImage/>} />
       
      </Routes>
    </ImageProvider>
    </>
  )
}

export default App
