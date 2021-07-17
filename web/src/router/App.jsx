import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../assets/styles/App.css";
import Home from "../views/Home";
import Horarios from "../views/Horarios";
import Error404 from "../views/Error404";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/horarios" component={Horarios} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
