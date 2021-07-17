import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../assets/styles/App.css";
// views
import Home from "../views/Home";
import SelectorRamos from "../views/SelectorRamos";
import Horarios from "../views/Horarios";
import Error404 from "../views/Error404";
import Simulador from "../views/Simulador";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/selector" component={SelectorRamos} exact />
          <Route path="/horarios" component={Horarios} />
          <Route path="/simulador" component={Simulador} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
