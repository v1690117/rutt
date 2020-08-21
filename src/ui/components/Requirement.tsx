import * as React from "react";
import {useEffect, useState} from "react";
import {IRequirement, ITask} from "../interfaces/model";
import {Link} from "react-router-dom";

interface IRequirementProps {
    id: number;
}

export const Requirement = (props: IRequirementProps) => {
    const [requirement, setRequirement] = useState<IRequirement | null>();
    useEffect(() => {
        fetch(`/api/requirements/${props.id}`)
            .then(r => r.json())
            .then(setRequirement);
    }, [props.id]);
    return (<div>
        {
            requirement && (<div>
                <h1>{`${requirement.id}. ${requirement.text}`}</h1>
                <b>Specification:</b>
                <Link to={`/specifications/${requirement.specification.id}`}>
                    #{requirement.specification.id}
                </Link> {requirement.specification.title}
                <div>
                    <h3>Child requirements</h3>
                    <ul>
                        {requirement.children.map((child: IRequirement) =>
                            <li key={child.id}>
                                <Link to={`/requirements/${child.id}`}>#{child.id}</Link>
                                {child.text}
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <h3>Tasks</h3>
                    <ul>
                        {requirement.tasks.map((task: ITask) =>
                            <li key={task.id}>
                                <Link to={`/tasks/${task.id}`}>#{task.id}</Link>
                                {task.title}
                            </li>
                        )}
                    </ul>
                </div>
            </div>)
        }
    </div>);
}