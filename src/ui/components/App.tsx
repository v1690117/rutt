import * as React from "react";
import {FunctionComponent, useEffect, useRef, useState} from "react";
import FunctionalSpecificationService from "../services/functionalSpecificationService";
import {FunctionalSpecification} from "../model/model";
import "./../styles/index.css"

enum Categories {
    FunctionalSpecifications,
    BPs,
    Tests,
    Requirements
}

interface FunctionalSpecificationsProps {
}

const FunctionalSpecifications: FunctionComponent<FunctionalSpecificationsProps> = () => {
    const service = useRef(new FunctionalSpecificationService());
    const [specs, setSpecs] = useState<FunctionalSpecification[]>();
    useEffect(() => {
        service.current.getFunctionalSpecs().then(setSpecs);
    }, []);
    return <li>
        {specs?.map(s => <ul>{s.title} | {s.description}</ul>)}
    </li>
}

const App: React.FC = () => {
    const [category, setCategory] = useState<Categories>(Categories.FunctionalSpecifications);
    const [id, setId] = useState<string | null>(null);
    return <>
        <div className="main-nav-bar">
            <ul>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Help</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Sign in</a></li>
            </ul>
        </div>
        <div className="side-nav-bar">
            <ul>
                <li><a href="/">Functional Specifciations</a></li>
                <li><a href="/">Business Processes</a></li>
                <li><a href="/">BP-FS Matrix</a></li>
                <li><a href="/">Test Plans</a></li>
                <li><a href="/">Requirements</a></li>
                <li><a href="/">Project Settings</a></li>
            </ul>
        </div>
        <div className="content">
            {/*{category === Categories.FunctionalSpecifications && <FunctionalSpecifications/>}*/}
        </div>
    </>
}

export default App;