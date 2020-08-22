import * as React from "react";
import {CSSProperties} from "react";
import MaterialTable, {Column} from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Edit from "@material-ui/icons/Edit";
import SaveAlt from "@material-ui/icons/SaveAlt";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Search from "@material-ui/icons/Search";
import {ArrowUpward} from "@material-ui/icons";
import Remove from "@material-ui/icons/Remove";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
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

export const contentClass: CSSProperties = {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    width: '100%'
};

interface ITableProps {
    columns: Column<any>[];
    data: any[];
    title: string;
    options?: { [index: string]: any };
    actions?: any[];
    parentChildData?: any;
    onSelectionChange?: any;
}

const Table = ({
                   columns,
                   data,
                   title,
                   options = {},
                   actions,
                   parentChildData,
                   onSelectionChange
               }: ITableProps) => <MaterialTable
    style={contentClass}
    columns={columns}
    data={data}
    title={title}
    icons={tableIcons as any}
    options={{
        // pageSize: 20,
        exportButton: true,
        exportAllData: true,
        sorting: false,
        ...options
    }}
    actions={actions}
    parentChildData={parentChildData}
    onSelectionChange={onSelectionChange}
/>

export default Table;