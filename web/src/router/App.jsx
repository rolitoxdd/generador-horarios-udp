import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "../views/Home";
import Horario from "../views/Horario";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/horario" component={Horario} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
