import * as React from "react";
import {useEffect, useState} from "react";
import {ISpecification} from "../interfaces/model";
import MaterialTable from "material-table";
import {tableIcons} from "./Specification.tsx";
import {Link} from "react-router-dom";

export const Specifications: React.FC = () => {
    const [specifications, setSpecifications] = useState<ISpecification[]>([]);
    useEffect(() => {
        fetch('/api/specifications')
            .then(r => r.json())
            .then(setSpecifications);
    }, []);
    return (
        <div style={{maxWidth: "100%"}}>
            <MaterialTable
                columns={[
                    {
                        title: "ID",
                        render: (rowData: ISpecification) => <Link
                            to={`/specifications/${rowData.id}`}>#{rowData.id}</Link>
                    },
                    {title: "Title", field: "title"}
                ]}
                data={specifications}
                title="Demo Title"
                icons={tableIcons as any}
                options={
                    {pageSize: 20, maxBodyHeight: 400, exportButton: true, exportAllData: true, sorting: false}
                }
            />
        </div>
    );
}