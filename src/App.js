import './App.css';
import ShowsList from './page/ShowsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate,Routes, Route } from "react-router-dom";
import ShowsDetails from './page/ShowsDetails';
import Bookshow from './page/Bookshow'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/*" element={<Navigate to="/ShowList" />} />
      <Route path="/ShowList" element={<ShowsList/>} />
      <Route path="/ShowDetails" element={<ShowsDetails />} />
        <Route path="/BookShow/:movieName" element={<Bookshow />} />
      
      </Routes>
    </div>
  );
}

export default App;
