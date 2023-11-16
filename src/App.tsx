import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./App.css"

function App() {
  return (
    <div className="App-wrapper">
    <div className="App">
    <Navbar />
    <Outlet />
    </div>
    </div>
  );
}

export default App;
