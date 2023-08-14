import React, { useState } from 'react';
import ChildState from './ChildState';

function ParentState() {
    const [state, changeState] = useState({ name: 'Sachin', nickname: 'Inflame' });

    const changeName = (e) => {
        changeState({ ...state, name: e});
    };

    return (
        <div>
            <ChildState name={state.name} nickname={state.nickname} changeName={changeName} />
        </div>
    );
}

export default ParentState;