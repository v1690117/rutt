import * as React from "react";
import {FunctionComponent, useEffect, useRef, useState} from "react";
import {FunctionalSpecification, RequirementSpecification} from "../model/model";
import "./../styles/index.css"
import FunctionalSpecificationService from "../services/FunctionalSpecificationService";
import RequirementSpecificationService from "../services/RequirementSpecificationService";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

enum Categories {
    FunctionalSpecifications,
    BPs,
    Tests,
    Requirements
}

interface FunctionalSpecificationsProps {
}

interface FSRowViewProps {
    fs: FunctionalSpecification;
}

const FSRowView: FunctionComponent<FSRowViewProps> = (fs) => (<div className="fs-row">
    <div className="fs-row-header"><a href="/">#{fs.fs.id} {fs.fs.title}</a></div>
    <div className="fs-row-content">{fs.fs.description}</div>
</div>)

const FunctionalSpecifications: FunctionComponent<FunctionalSpecificationsProps> = () => {
    const service = useRef(new FunctionalSpecificationService());
    const [specs, setSpecs] = useState<FunctionalSpecification[]>();
    useEffect(() => {
        service.current.getFunctionalSpecs().then(setSpecs);
    }, []);
    return <div className="fs-holder">
        <ul>
            {specs && [...specs, ...specs, ...specs, ...specs, ...specs, ...specs, ...specs, ...specs, ...specs, ...specs,]?.map(spec =>
                <li><FSRowView fs={spec}/></li>)}
        </ul>
    </div>
}


// todo change styles for requirements
interface RequirementSpecificationsProps {
}

interface RSRowViewProps {
    rs: RequirementSpecification;
}

const RSRowView: FunctionComponent<RSRowViewProps> = (fs) => (<div className="fs-row">
    <div className="fs-row-header"><a href="/">#{fs.rs.id} {fs.rs.title}</a></div>
</div>)

const RequirementSpecifications: FunctionComponent<RequirementSpecificationsProps> = () => {
    const service = useRef(new RequirementSpecificationService());
    const [specs, setSpecs] = useState<RequirementSpecification[]>();
    useEffect(() => {
        service.current.getFunctionalSpecs().then(setSpecs);
    }, []);
    return <div className="fs-holder">
        <ul>
            {specs && [...specs, ...specs, ...specs, ...specs, ...specs, ...specs, ...specs, ...specs, ...specs, ...specs,]?.map(spec =>
                <li><RSRowView rs={spec}/></li>)}
        </ul>
    </div>
}

const NotImplemented: FunctionComponent<any> = () => <div className="warn-under-construction">The page is under
    construction!</div>

const App: React.FC = () => {
    const [category, setCategory] = useState<Categories>(Categories.FunctionalSpecifications);
    return <>
        <Router>
            <div className="main-nav-bar">
                <ul>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Sign in</Link></li>
                </ul>
            </div>
            <div className="side-nav-bar">
                <ul>
                    <li><Link to="/functional-specifications">Functional Specifciations</Link></li>
                    <li><Link to="/business-processes">Business Processes</Link></li>
                    <li><Link to="/bp-fs-matrices">BP-FS Matrix</Link></li>
                    <li><Link to="/test-plans">Test Plans</Link></li>
                    <li><Link to="/requirement-specifications">Requirements</Link></li>
                    <li><Link to="/settings">Project Settings</Link></li>
                </ul>
            </div>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <NotImplemented/>
                    </Route>
                    <Route exact path="/projects">
                        <NotImplemented/>
                    </Route>
                    <Route exact path="/help">
                        <NotImplemented/>
                    </Route>
                    <Route exact path="/about">
                        <NotImplemented/>
                    </Route>
                    <Route exact path="/login">
                        <NotImplemented/>
                    </Route>
                    <Route exact path="/functional-specifications">
                        <FunctionalSpecifications/>
                    </Route>
                    <Route exact path="/business-processes">
                        <NotImplemented/>
                    </Route>
                    <Route exact path="/bp-fs-matrices">
                        <NotImplemented/>
                    </Route>
                    <Route exact path="/test-plans">
                        <NotImplemented/>
                    </Route>
                    <Route exact path="/requirement-specifications">
                        <RequirementSpecifications/>
                    </Route>
                    <Route exact path="/settings">
                        <NotImplemented/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </>
}

export default App;