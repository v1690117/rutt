import * as React from "react";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Task} from "./Task.tsx";
import {Specification} from './Specification.tsx';
import {Tasks} from './Tasks.tsx';
import {Specifications} from './Specifications.tsx';
import {Requirement} from "./Requirement.tsx";
import {Paper, Tab, Tabs} from "@material-ui/core";
import './../styles/index.css'


const App: React.FC = () => {
    const [tab, setTab] = React.useState(0);
    const changeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTab(newValue);
    };
    return (
        <Router>
            <div className="toolbar">
                <Paper square>
                    <Tabs
                        value={tab}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={changeTab}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Requirement specifications" to={"/specifications"} component={Link}/>
                        <Tab label="Tasks" to={"/tasks"} component={Link}/>
                        <Tab label="Usecases" to={"/usecases"} component={Link} disabled/>
                    </Tabs>
                </Paper>
            </div>
            <div className="content">
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
                    <Route path="/requirements/:id"
                           render={({match}) => <Requirement id={match.params.id}/>}
                    />
                    <Route path="/tasks">
                        <Tasks/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;