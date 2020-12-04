import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";


function App() {
  return (
    <div>
      <Header
        color="dark"
        //routes={dashboardRoutes}
        brand="Material Kit React"
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
