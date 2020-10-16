import React from 'react';

const User = (props) => {
    console.log('hi',props)
    return (
        <div>
        <strong>
            {props.user.name} ({props.user.username})
        </strong>
        <br />
        <span>{props.user.email}</span>
        </div>
    )
}

export default User;