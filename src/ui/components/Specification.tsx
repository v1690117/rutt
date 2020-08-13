import * as React from "react";
import {useEffect, useState} from "react";
import {IRequirement, ISpecification} from "../interfaces/model";

interface ISpecProps {
    id: number;
}

export const Specification = (props: ISpecProps) => {
    const [specification, setSpecification] = useState<ISpecification | null>();
    useEffect(() => {
        fetch(`/api/specifications/${props.id}`)
            .then(r => r.json())
            .then(setSpecification);
    }, []);
    return (<div>
        {
            specification && <div><h1>{`${specification.id}. ${specification.title}`}</h1>
                <ol>
                    {specification.requirements.map((req: IRequirement) =>
                        <li key={req.id}>{req.text}</li>
                    )}
                </ol>
            </div>
        }
    </div>);
}