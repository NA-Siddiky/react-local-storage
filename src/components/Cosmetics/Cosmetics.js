import React, { useEffect, useState } from 'react';
import { add as addition, multiply } from '../../utilities/store';
import Cosmetic from '../Cosmetic/Cosmetic'

const Cosmetics = () => {
    // const first = 55;
    // const second = 5;

    // const sum = addition(first, second)
    // const multi = multiply(first, second)

    // const cosmetics = [
    //     { id: 1, name: 'alta', price: '1200' },
    //     { id: 2, name: 'nelposlsh', price: '10' },
    //     { id: 3, name: 'alta', price: '100' },
    //     { id: 4, name: 'alta', price: '200' },
    //     { id: 5, name: 'lipstick', price: '12' },

    // ]

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('./cosmetics.json')
            .then(response => response.json())
            .then(data => setCosmetics(data))
    }, [])

    return (
        <div>
            {/* <h3>{sum}</h3>
            <h3>{multi}</h3> */}
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;