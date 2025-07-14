// import HomeLayout from "./assets/components/hoc/Homelayout"
// import VideoPlayer from "./assets/components/VideoPlayer"

// function App() {
  
//   return (
//     < >
//     <HomeLayout>
//     < VideoPlayer/>
//     </HomeLayout>  
//     </>
//   )
// }
// export default App
// ---------------------------------------
// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./assets/components/hoc/Homelayout";
import VideoPlayer from "./assets/components/VideoPlayer";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal con layout y el video */}
        <Route
          path="/"
          element={
            <HomeLayout>
              <VideoPlayer />
            </HomeLayout>
          }
        />

        {/* Ruta para login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta para registro */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



