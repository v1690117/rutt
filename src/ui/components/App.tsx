import * as React from "react";
import {FunctionComponent, useEffect, useRef, useState} from "react";
import {FunctionalSpecification} from "../model/model";
import "./../styles/index.css"
import FunctionalSpecificationService from "../services/FunctionalSpecificationService";

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
            {category === Categories.FunctionalSpecifications && <FunctionalSpecifications/>}
        </div>
    </>
}

export default App;