import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Service from "./Service";
import Profil from "./Profile";
import NavBar from "./Nav";
import Marketing from "./Marketing";
import "./App.css";
import Developpement from "./developpemnt";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/services"} element={<Service />}>
            <Route
              path={"/services/developpement"}
              element={<Developpement />}
            />
            <Route path={"/services/marketing"} element={<Marketing />} />
          </Route>

          <Route path={"*"} element={<NotFound />}></Route>
          <Route path={"/profil/:id"} element={<Profil />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
