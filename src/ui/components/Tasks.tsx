import * as React from "react";
import {useEffect, useState} from "react";
import {ITask} from "../interfaces/model";
import {Link} from "react-router-dom";

export const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    useEffect(() => {
        fetch('/api/tasks')
            .then(r => r.json())
            .then(setTasks);
    }, []);
    return (<div>
        <ol>
            {tasks.map(task => <li key={task.id}><Link to={`/tasks/${task.id}`}>{task.title}</Link></li>)}
        </ol>
    </div>);
}