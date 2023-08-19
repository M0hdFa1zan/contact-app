
import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';
import Footer from './Components/Footer';

function App() {

  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App">
      <div className='app_title'>
        <img className="brand" src="https://taiyo.ai/wp-content/uploads/Taiyo-logo.png" />

        <div id="title">
          <h1>
            {
              currentRoute == "/" ? 'CONTACT KEEPER' : "Charts and Maps"
            }
          </h1>
        </div>
        <div id="support">Help</div>
      </div>
      <div className='flex w-full '>
        <div >
          <SideBar />
        </div>
        <div className='w-full'>
          <AllRoutes />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

