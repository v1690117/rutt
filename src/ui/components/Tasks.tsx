import * as React from "react";
import {useEffect, useState} from "react";
import {IRequirement, ISpecification, ITask} from "../interfaces/model";
import {Link} from "react-router-dom";
import Table from "./Table.tsx";

export const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    useEffect(() => {
        fetch('/api/tasks')
            .then(r => r.json())
            .then(setTasks);
    }, []);
    return (
        <Table
            title="Tasks"

            data={tasks}
            columns={[
                {
                    title: "ID",
                    render: (rowData: ISpecification) => <Link
                        to={`/tasks/${rowData.id}`}>#{rowData.id}
                    </Link>
                },
                {title: "Title", field: "title"},
                {
                    title: "Requirements",
                    render: (rowData: any) => {
                        return <div>
                            <ul>
                                {rowData.requirements.map((r: IRequirement) => <Link
                                    to={`/requirements/${r.id}`}>#{r.id}</Link>)}
                            </ul>
                        </div>
                    }
                }
            ]}
        />
    );
}