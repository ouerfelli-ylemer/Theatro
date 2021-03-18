import Home from "./Home"
import JTI from "./JTI"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/JTI">
                        <JTI />
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>
  );
}

export default App;
