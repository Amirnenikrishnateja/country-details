
import { Link, useParams } from 'react-router-dom';
import './App.css';
import { Outlet } from 'react-router-dom';
import Country from './countrydetails';


function App() {
  
  return (
    <div>
    <Link to="/country">country</Link>
    <Outlet></Outlet>
        </div>
  );
}

export default App;
