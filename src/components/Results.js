import React from"react";


const Results = props => {
    const {firstName, lastName, email, password, confirmPassword} = props.data;
    return(
    <div>
        <h1>Results</h1>
        <p>FirstName: {firstName}</p>
        <p>LastName: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>ConfirmPassword: {confirmPassword}</p>
    </div>
    );

};
export default Results;