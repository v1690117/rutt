import * as React from "react";
import {useEffect, useState} from "react";
import {ISpecification, ITask} from "../interfaces/model";
import {Link} from "react-router-dom";
import MaterialTable from "material-table";
import {tableIcons} from "./Specification.tsx";

export const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    useEffect(() => {
        fetch('/api/tasks')
            .then(r => r.json())
            .then(setTasks);
    }, []);
    return (
        <div style={{maxWidth: "100%"}}>
            <MaterialTable
                columns={[
                    {
                        title: "ID",
                        render: (rowData: ISpecification) => <Link
                            to={`/tasks/${rowData.id}`}>#{rowData.id}</Link>
                    },
                    {title: "Title", field: "title"},
                    {
                        title: "Requirements",
                        render: (rowData) => {
                            return <div>
                                <ul>
                                    {rowData.requirements.map(r => <Link to={`/requirements/${r.id}`}>#{r.id}</Link>)}
                                </ul>
                            </div>
                        }
                    }
                ]}
                data={tasks}
                title="Demo Title"
                icons={tableIcons as any}
                options={
                    {pageSize: 20, maxBodyHeight: 400, exportButton: true, exportAllData: true, sorting: false}
                }
            />
        </div>
    );
    return (<div>
        <ol>
            {tasks.map(task => <li key={task.id}><Link to={`/tasks/${task.id}`}>{task.title}</Link></li>)}
        </ol>
    </div>);
}