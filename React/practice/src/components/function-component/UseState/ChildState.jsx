import React from 'react';

function ChildState(props) {
    const changeName = (e) => {
        const newName = e.target.value;
        props.changeName(newName);
    };

    return (
        <div>
            <input type="text" value={props.name} onChange={changeName}/>
            {props.name}
            {props.nickname}
        </div>
    );
}

export default ChildState;
