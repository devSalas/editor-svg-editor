import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import EditorImage from "./components/EditorImage"
import { ImageProvider } from "./context/ImageContext"
import EditorImages from "./components/test-editor"



function App() {
  //const [imageUrl, setImageUrl] = useState(false)
  return (
    <>
    <ImageProvider>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/editor"  element={<EditorImage/>} />
        <Route path="/editors"  element={<EditorImages/>} />
      </Routes>
    </ImageProvider>
    </>
  )
}

export default App
