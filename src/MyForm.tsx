import * as React from 'react';
import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { MyField } from './MyField';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Formik initialValues={{ firstName: '', lastName: '', email: '' }} onSubmit={(values) => {
            onSubmit(values)
        }}>
            {({ values }) => (
                <Form>
                    <div>
                        <Field name="firstName" placeholder="First Name" component={MyField} />
                    </div>
                    <div>
                        <Field name="lastName" placeholder="Last Name" component={MyField} />
                    </div>
                    <div>
                        <Field name="email" placeholder="Email" component={MyField} />
                    </div>
                    <Button type="submit">Submit</Button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    );
}