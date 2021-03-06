import React from 'react';
import { ErrorMessage, useField } from 'formik';


export const TextField = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
            <i htmlFor={field.name}>{label}</i>
            <input
                className={`form-control warning shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="error" style={{ color: "red" }} />
        </div>
    )
}
