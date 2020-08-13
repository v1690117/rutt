import * as React from "react";
import {useEffect, useState} from "react";
import {ISpecification} from "../interfaces/model";
import {Link} from "react-router-dom";

export const Specifications: React.FC = () => {
    const [specifications, setSpecifications] = useState<ISpecification[]>([]);
    useEffect(() => {
        fetch('/api/specifications')
            .then(r => r.json())
            .then(setSpecifications);
    }, []);
    return (<div>
        <ol>
            {specifications.map(spec => <li key={spec.id}><Link to={`/specifications/${spec.id}`}>{spec.title}</Link>
            </li>)}
        </ol>
    </div>);
}