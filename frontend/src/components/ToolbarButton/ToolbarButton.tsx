import { Button } from "../Button/Button";
import { ToolbarButtonItem } from "./ToolbarButton.styles";

export interface ToolbarButtonProps {
    label: string;
    id?: string;
    onClick?: () => void;
}

export const ToolbarButton: React.FunctionComponent<ToolbarButtonProps> = (props) => {
    return (
        <ToolbarButtonItem >
            <Button label={props.label} key={props.id} onClick={props.onClick}></Button>
        </ToolbarButtonItem>
    )
}
