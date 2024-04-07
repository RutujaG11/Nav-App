
import './App.css';
 import { useRoutes } from 'react-router-dom'
 import {appRoutes} from './routes'
import LandingPage from './Components/LandingPage';
function App() {
  const element= useRoutes(appRoutes)
  return (
    <div className="App">
      <LandingPage/>
      {element}
    </div>
  );
}

export default App;