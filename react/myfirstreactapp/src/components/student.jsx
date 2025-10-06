import React from "react";

function Student({ name, rollnumber }) {
    return (
        <>
            <h1>This is student data</h1>
            <p>Name: {name}</p>
            <p>Roll number: {rollnumber}</p>
        </>
    );
}

export default Student;