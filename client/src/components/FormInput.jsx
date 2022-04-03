import React from "react";
import { Form } from "react-bootstrap";

const FormInput = (props) => {
    const {label, id, onChange, infoText, value, ...inputProps} = props;
    return (
        <Form.Group className="mb-3" controlId={props.name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control {...inputProps} value={value} onChange={onChange}/>
            {<Form.Text className="text-muted">{infoText}</Form.Text>}
        </Form.Group>
    );
}
export default FormInput;
