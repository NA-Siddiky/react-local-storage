import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    // console.log(props)
    const { id, name, price } = props.cosmetic;
    const handlePunches = id => {
        console.log(id)
        addToDb(id);
    }
    const handleRemove = id => {
        removeFromDb(id)
    }
    return (
        <div style={{ border: '2px solid orange', margin: '4px' }}>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{price}</h2>
            <button onClick={() => handlePunches(id)}>Punches</button>
            <button onClick={() => handleRemove(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;