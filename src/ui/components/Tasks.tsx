import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {IRequirement, ISpecification, ITask} from "../interfaces/model";
import {Link} from "react-router-dom";
import Table from "./Table.tsx";
import CreateTaskForm from "./CreateTaskForm.tsx";
import {Drawer} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [creationFormActive, setCreationFormActive] = useState<boolean>(false);
    const fetchTask = () => {
        fetch('/api/tasks')
            .then(r => r.json())
            .then(setTasks)
            .catch(alert);
    }
    useEffect(() => {
        fetchTask()
    }, []);
    useEffect(() => {
        fetchTask();
    }, []);
    const closeFormHandler = useCallback(() => {
        setCreationFormActive(false);
    }, []);
    const creationHandler = useCallback(() => {
        fetchTask();
        setCreationFormActive(false);
    }, []);
    return (
        <>
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
                actions={[
                    {
                        icon: AddIcon,
                        tooltip: 'New',
                        isFreeAction: true,
                        onClick: () => setCreationFormActive(true)
                    }
                ]}
            />
            <Drawer anchor={'right'} open={creationFormActive} onClose={closeFormHandler}>
                <CreateTaskForm onClose={closeFormHandler} onCreate={creationHandler}/>
            </Drawer>
        </>
    );
}