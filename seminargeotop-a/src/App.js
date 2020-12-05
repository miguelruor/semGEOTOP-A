import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";


function App() {
  return (
    <div>
      <Header
        color="blue"
        //routes={dashboardRoutes}
        brand="Seminar GEOTOP-A"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        //{...rest}
      />
    </div>
  );
}

export default App;
