import * as React from "react";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Task} from "./Task.tsx";
import {Specification} from "./Specification.tsx";
import {Tasks} from "./Tasks.tsx";
import {Specifications} from "./Specifications.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/specifications">Specifications</Link>
                    </li>
                    <li>
                        <Link to="/tasks">Tasks</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Switch>
                    <Route path="/specifications/:id"
                           render={({match}) => <Specification id={match.params.id}/>}
                    />
                    <Route path="/specifications">
                        <Specifications/>
                    </Route>
                    <Route path="/tasks/:id"
                           render={({match}) => <Task id={match.params.id}/>}
                    />
                    <Route path="/tasks">
                        <Tasks/>
                    </Route>
                </Switch>
            </div>
        </Router>);
}

export default App;