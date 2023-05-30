import Divorce from "./pages/Divorce";
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Divorce />} />
    </Routes>
  );
}

export default App;
