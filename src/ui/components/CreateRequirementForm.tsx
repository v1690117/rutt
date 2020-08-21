import {ISpecification} from "../interfaces/model";
import * as React from "react";
import {useState} from "react";
import {Button, ButtonGroup, TextField} from "@material-ui/core";

interface ICreationFormProps {
    onClose: () => void;
    onCreate: () => void;
    specification: ISpecification;
    selections: number[];
}

const CreateRequirementForm: any = (props: ICreationFormProps) => {
    const [text, setText] = useState<string>("");
    const onCreateHandler = () => {
        const parentId = props.selections && props.selections.length === 1 ? props.selections[0] : undefined;
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
export default CreateRequirementForm;