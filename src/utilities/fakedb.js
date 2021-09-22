let shopping_cart = {};

const getDB = () => localStorage.getItem('shopping_cart');
const updateDB = cart => {
    // console.log(cart)
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
    // console.log(shopping_cart);
}

const addToDb = id => {
    // console.log(id)
    // const exists = localStorage.getItem(id);
    // console.log(exists);
    // if (!exists) {
    //     localStorage.setItem(id, 1);

    // }
    // else {
    //     const newCount = parseInt(exists) + 1
    //     localStorage.setItem(id, newCount);
    // }

    const exists = getDB();

    if (!exists) {
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else {
            shopping_cart[id] = 1;
        }
    }
    updateDB(shopping_cart);
    // console.log(shopping_cart);
}

const removeFromDb = id => {
    const exists = getDB();

    if (exists) {
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updateDB(shopping_cart);
        // console.log(shopping_cart);
    }
    else {
        return 0;
    }
}


export { addToDb, removeFromDb }