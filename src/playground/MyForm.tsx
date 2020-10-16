import * as React from "react";
import { TextField } from "@material-ui/core";
import { Formik, Form } from "formik";
// import RaisedButton from "material-ui/RaisedButton";
import Button from '@material-ui/core/Button';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

interface IProps {
    onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<IProps> = ({onSubmit}) => {
    return (
        <Formik initialValues={{firstName: '', lastName: '', email: ''}} onSubmit={(values) => {
            onSubmit(values)
        }}>
            {({values, handleChange, handleBlur}) => (
                <Form>
                    <div>
                    <TextField 
                        placeholder="first name"
                        name="firstName" 
                        value={values.firstName} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                    </div>
                    <div>
                    <TextField 
                        placeholder="last name"
                        name="lastName" 
                        value={values.lastName} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                    </div>
                    <div>
                    <TextField 
                        placeholder="email"
                        name="email" 
                        value={values.email} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                    </div>
                    <Button variant="contained" type="submit">Submit</Button>
                    <pre>
                        {JSON.stringify(values, null, 2)}
                    </pre>
                </Form>
            )}
        </Formik>
        
    );
};