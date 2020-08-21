import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {IRequirement, ISpecification, ITask} from "../interfaces/model";
import {Button, ButtonGroup, Drawer, TextField} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Table from "./Table.tsx";


interface ISpecProps {
    id: number;
}

const Task = (props: { task: ITask }) => <div>
    <a href={`#/tasks/${props.task.id}`}>#{props.task.id}</a> {props.task.title}
</div>


interface ICreationFormProps {
    onClose: () => void;
    onCreate: () => void;
    specification: ISpecification;
    selections: number[];
}

const CreationForm: any = (props: ICreationFormProps) => {
    const [text, setText] = useState<string>("");
    const onCreateHandler = () => {
        const parentId = props.selections && props.selections.length === 1 ? props.selections[0] : undefined;
        debugger;
        fetch('/api/requirements', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text,
                specification: {
                    id: props.specification.id
                },
                parentId
            })
        }).then(props.onCreate).catch(alert);
    };
    return (
        <>
            <div>
                <TextField id="text" label="Text" value={text}
                           defaultValue={" "}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
                />
            </div>
            <ButtonGroup aria-label="outlined primary button group">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={props.onClose}
                    size="small"
                >
                    Close
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onCreateHandler}
                    size="small"
                >
                    Create
                </Button>
            </ButtonGroup>
        </>
    );
}

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
    return (<>
        {
            specification &&
            <Table
                columns={[
                    {title: "ID", field: "id"},
                    {title: "Requirement", field: "text"},
                    {
                        title: "Tasks",
                        render: (rowData) => {
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
            <CreationForm specification={specification} selections={selectedRequirements} onClose={closeFormHandler}
                          onCreate={creationHandler}/>
        </Drawer>
    </>);
}