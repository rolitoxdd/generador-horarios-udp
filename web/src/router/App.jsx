import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../assets/styles/App.css";
import Home from "../views/Home";
import Horarios from "../views/Horarios";

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/horarios" component={Horarios} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
