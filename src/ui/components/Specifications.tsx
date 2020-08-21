import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {ISpecification} from "../interfaces/model";
import {Link} from "react-router-dom";
import {Drawer} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Table from "./Table.tsx";
import CreateSpecificationForm from "./CreateSpecificationForm.tsx";

export const Specifications: React.FC = () => {
    const [specifications, setSpecifications] = useState<ISpecification[]>([]);
    const [creationFormActive, setCreationFormActive] = useState<boolean>(false);
    const fetchSpecifications = () => {
        fetch('/api/specifications')
            .then(r => r.json())
            .then(setSpecifications)
            .catch(alert);
    }
    useEffect(() => {
        fetchSpecifications();
    }, []);
    const closeFormHandler = useCallback(() => {
        setCreationFormActive(false);
    }, []);
    const creationHandler = useCallback(() => {
        fetchSpecifications();
        setCreationFormActive(false);
    }, []);
    return (
        <>
            <Table
                columns={[
                    {
                        title: "ID",
                        render: (rowData: ISpecification) => <Link
                            to={`/specifications/${rowData.id}`}>#{rowData.id}</Link>
                    },
                    {title: "Title", field: "title"}
                ]}
                data={specifications}
                title="Specifications"
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
                <CreateSpecificationForm onClose={closeFormHandler} onCreate={creationHandler}/>
            </Drawer>
        </>
    );
}
