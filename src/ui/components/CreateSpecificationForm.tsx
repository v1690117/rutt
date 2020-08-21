import * as React from "react";
import {useState} from "react";
import {Button, ButtonGroup, TextField} from "@material-ui/core";

interface ICreationFormProps {
    onClose: () => void;
    onCreate: () => void;
}

const CreateSpecificationForm: any = (props: ICreationFormProps) => {
    const [title, setTitle] = useState<string>("");
    const create = () => {
        fetch('/api/specifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title})
        }).then(props.onCreate).catch(alert);
    };
    return (
        <>
            <div>
                <TextField id="title" label="Title" value={title}
                           defaultValue={" "}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
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
                    onClick={create}
                    size="small"
                >
                    Create
                </Button>
            </ButtonGroup>
        </>
    );
}
export default CreateSpecificationForm;