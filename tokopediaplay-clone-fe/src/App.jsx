import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos/:id" element={<VideoDetail/>}/>
      </Routes>
    </>
  )
}

export default App;
