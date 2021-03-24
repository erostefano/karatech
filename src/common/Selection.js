import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import {useTranslation} from "react-i18next";
import './Selection.css';

function Selection(props) {
    const {t} = useTranslation();

    let onChange = (event) => {
        props.selectionCallback(props.name, event);
    }

    return (
        <div>
            <h2>{props.name}</h2>
            <ToggleButtonGroup name={props.name} onChange={onChange}>
                {props.elements.map(hit => <ToggleButton variant="outline-primary" key={hit}
                                                         value={hit}>{t(hit)}</ToggleButton>)}
            </ToggleButtonGroup>
        </div>
    )
}

export default Selection;
