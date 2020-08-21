import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {IRequirement, ITask} from "../interfaces/model";
import {Link} from "react-router-dom";
import {Button, Drawer} from "@material-ui/core";
import CreateRequirementForm from "./CreateRequirementForm.tsx";
import CreateTaskForm from "./CreateTaskForm.tsx";

interface IRequirementProps {
    id: number;
}

export const Requirement = (props: IRequirementProps) => {
    const [requirement, setRequirement] = useState<IRequirement | null>();
    const [childCreationFormActive, setChildCreationFormActive] = useState<boolean>(false);
    const [taskCreationFormActive, setTaskCreationFormActive] = useState<boolean>(false);
    const fetchRequirement = () => fetch(`/api/requirements/${props.id}`)
        .then(r => r.json())
        .then(setRequirement);
    useEffect(() => {
        fetchRequirement();
    }, [props.id]);
    const closeFormHandler = useCallback(() => {
        setChildCreationFormActive(false);
        setTaskCreationFormActive(false);
    }, []);
    const requirementCreationHandler = useCallback(() => {
        fetchRequirement();
        setChildCreationFormActive(false);
    }, [props.id]);
    const taskCreationHandler = (task: ITask) => {
        fetch(
            `/api/requirements/${requirement.id}/tasks/${task.id}`,
            {
                method: 'POST'
            }
        ).then(() => {
            fetchRequirement();
            setTaskCreationFormActive(false);
        })
    };
    const openChildCreationForm = () => {
        setChildCreationFormActive(true);
    }
    const openTaskCreationForm = () => {
        setTaskCreationFormActive(true);
    }
    const deleteChild = (childId: number) => {
        fetch(`/api/requirements/${childId}`,
            {method: "DELETE"}
        ).catch(alert)
            .finally(fetchRequirement);
    }
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
                                <Button variant="contained"
                                        color="secondary"
                                        onClick={() => deleteChild(child.id)}
                                        size="small"
                                >x</Button>
                            </li>
                        )}
                    </ul>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={openChildCreationForm}
                        size="small"
                    >
                        New child requirement
                    </Button>
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
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={openTaskCreationForm}
                        size="small"
                    >
                        New task
                    </Button>
                </div>
                <Drawer anchor={'right'} open={childCreationFormActive} onClose={closeFormHandler}>
                    <CreateRequirementForm
                        parentId={requirement.id}
                        specification={requirement.specification}
                        onClose={closeFormHandler}
                        onCreate={requirementCreationHandler}
                    />
                </Drawer>
                <Drawer anchor={'right'} open={taskCreationFormActive} onClose={closeFormHandler}>
                    <CreateTaskForm
                        onClose={closeFormHandler}
                        onCreate={taskCreationHandler}
                    />
                </Drawer>
            </div>)
        }
    </div>);
}