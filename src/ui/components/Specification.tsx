import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {IRequirement, ISpecification, ITask} from "../interfaces/model";
import {Drawer} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Table from "./Table.tsx";
import CreateRequirementForm from "./CreateRequirementForm.tsx";
import {Link} from "react-router-dom";

interface ISpecProps {
    id: number;
}

const Task = (props: { task: ITask }) => <div>
    <a href={`#/tasks/${props.task.id}`}>#{props.task.id}</a> {props.task.title}
</div>

export const Specification = (props: ISpecProps) => {
    const [specification, setSpecification] = useState<ISpecification | null>();
    const [creationFormActive, setCreationFormActive] = useState<boolean>(false);
    const [selectedRequirements, setSelectedRequirements] = useState<number[]>([]);
    const fetchSpecification = () => {
        fetch(`/api/specifications/${props.id}`)
            .then(r => r.json())
            .then(setSpecification);
    }
    useEffect(() => {
        fetchSpecification();
    }, []);
    const closeFormHandler = useCallback(() => {
        setCreationFormActive(false);
    }, []);
    const creationHandler = useCallback(() => {
        fetchSpecification();
        setCreationFormActive(false);
    }, []);
    const getSelectedRequirement = () => selectedRequirements
    && selectedRequirements.length === 1
        ? selectedRequirements[0] : undefined;
    return (<>
        {
            specification &&
            <Table
                columns={[
                    {
                        title: "ID",
                        render: (rowData: IRequirement) => {
                            return <div>
                                <Link to={`/requirements/${rowData.id}`}>#{rowData.id}</Link>
                            </div>
                        }
                    },
                    {title: "Requirement", field: "text"},
                    {
                        title: "Tasks",
                        render: (rowData: IRequirement) => {
                            return <div>
                                <ul>
                                    {rowData.tasks.map((t: ITask) => <li><Task task={t}/></li>)}
                                </ul>
                            </div>
                        }
                    }
                ]}
                data={specification.requirements}
                title={specification.title}
                parentChildData={(row: any, rows: any[]) => rows.find(a => a.id === row.parentId)}
                options={
                    {
                        selection: true,
                        showSelectAllCheckbox: false,
                        showTextRowsSelected: false
                    }
                }
                actions={[
                    {
                        icon: AddIcon,
                        tooltip: 'New',
                        isFreeAction: false,
                        onClick: () => setCreationFormActive(true)
                    },
                    {
                        icon: AddIcon,
                        tooltip: 'New',
                        isFreeAction: true,
                        onClick: () => setCreationFormActive(true)
                    }
                ]}
                onSelectionChange={
                    (rows: any[]) => setSelectedRequirements(rows.map((r: IRequirement) => r.id))
                }
            />
        }
        <Drawer anchor={'right'} open={creationFormActive} onClose={closeFormHandler}>
            <CreateRequirementForm
                specification={specification}
                parentId={getSelectedRequirement()}
                onClose={closeFormHandler}
                onCreate={creationHandler}/>
        </Drawer>
    </>);
}