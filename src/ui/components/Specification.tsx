import * as React from "react";
import {useEffect, useState} from "react";
import {ISpecification, ITask} from "../interfaces/model";
import MaterialTable from "material-table";

import AddBox from '@material-ui/icons/AddBox';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {ArrowUpward} from "@material-ui/icons";

export const tableIcons = {
    Add: () => <AddBox/>,
    Check: () => <Check/>,
    Clear: () => <Clear/>,
    Delete: () => <DeleteOutline/>,
    DetailPanel: () => <ChevronRight/>,
    Edit: () => <Edit/>,
    Export: () => <SaveAlt/>,
    Filter: () => <FilterList/>,
    FirstPage: () => <FirstPage/>,
    LastPage: () => <LastPage/>,
    NextPage: () => <ChevronRight/>,
    PreviousPage: () => <ChevronLeft/>,
    ResetSearch: () => <Clear/>,
    Search: () => <Search/>,
    SortArrow: () => <ArrowUpward/>,
    ThirdStateCheck: () => <Remove/>,
    ViewColumn: () => <ViewColumn/>
};

interface ISpecProps {
    id: number;
}

const Task = (props: { task: ITask }) => <div>
    <a href={`#/tasks/${props.task.id}`}>#{props.task.id}</a> {props.task.title}
</div>

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
                <div style={{maxWidth: "100%"}}>
                    <MaterialTable
                        columns={[
                            {title: "ID", field: "id"},
                            {title: "Requirement", field: "text"},
                            {
                                title: "Tasks",
                                render: (rowData) => {
                                    return <div>
                                        <ul>
                                            {rowData.tasks.map(t => <li><Task task={t}/></li>)}
                                        </ul>
                                    </div>
                                }
                            }
                        ]}
                        data={specification.requirements}
                        title="Demo Title"
                        icons={tableIcons as any}
                        parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                        options={
                            {pageSize: 20, maxBodyHeight: 400, exportButton: true, exportAllData: true, sorting: false}
                        }
                    />
                </div>
            </div>
        }
    </div>);
}