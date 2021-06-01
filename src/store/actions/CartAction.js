

export function addToCart (item) {
    return {
        type: 'ADD_TO_CART',
        payLoad: item,
        
    }
}

export function updateCartItemUnits({id, units}) {
    return {
        type: 'UPDATE_ITEM_UNITS',
        payLoad: {id, units}
    }
    
}


export function removeFromCart (item){
    return {
        type: 'REMOVE_FROM_CART',
        payLoad: item
    }
}


