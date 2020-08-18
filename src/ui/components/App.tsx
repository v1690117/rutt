import * as React from "react";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Task} from "./Task.tsx";
import {Specification} from "./Specification.tsx";
import {Tasks} from "./Tasks.tsx";
import {Specifications} from "./Specifications.tsx";
import {Paper, Tab, Tabs} from "@material-ui/core";

const App: React.FC = () => {
    const [tab, setTab] = React.useState(0);
    const changeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTab(newValue);
    };
    return (
        <Router>
            <Paper square>
                <Tabs
                    value={tab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={changeTab}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Requirement specifications" component={Link} to={"/specifications"}/>
                    <Tab label="Tasks" component={Link} to={"/tasks"}/>
                    <Tab label="Usecases" component={Link} to={"/usecases"} disabled/>
                </Tabs>
            </Paper>
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
                    {/*<Route path="/">*/}
                    {/*    <h1>RUTT</h1>*/}
                    {/*</Route>*/}
                </Switch>
            </div>
        </Router>
    );
}

export default App;