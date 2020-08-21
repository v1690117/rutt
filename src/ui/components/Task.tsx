import * as React from "react";
import {useEffect, useState} from "react";
import {IRequirement, ITask} from "../interfaces/model";

interface ITaskProps {
    id: number;
}

export const Task = (props: ITaskProps) => {
    const [task, setTask] = useState<ITask | null>();
    useEffect(() => {
        fetch(`/api/tasks/${props.id}`)
            .then(r => r.json())
            .then(setTask);
    }, [props.id]);
    return (<div>
        {
            task && <div><h1>{`${task.id}. ${task.title}`}</h1>
                <div>
                    {task.description}
                </div>
                <div>
                    <h3>Requirements</h3>
                    <ol>
                        {task.requirements.map((req: IRequirement) =>
                            <li key={req.id}>{req.text}</li>
                        )}
                    </ol>
                </div>
            </div>
        }
    </div>);
}