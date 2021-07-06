import { Route, Switch, useLocation } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Application from "./components/application/application";
import Home from "./components/home/Home";
import Login from "./components/home/Login";
import "./App.scss";
import { useState, useEffect } from "react";
function App() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    location.pathname.includes("/upload") ? setShowFooter(false) : setShowFooter(true);
  }, [location])

  return (
    <>
      <NavBar />
      {/* <Application /> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={Application} />
        <Route exact path="/login" component={Login} />
      </Switch>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
