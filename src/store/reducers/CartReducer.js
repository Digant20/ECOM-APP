

const initialState = [

    /*  {
          id: 2552,
          name: "Potted Rosemary (Microgreen)",
          description: "Grow your own herbs at home! Our rosemary brings out the best of any roasted dishes and panfried meats. Plucked from the farms into a pot for you. Comes with a detailed care instruction card.",
          productImage: "https://ecom.xircular.io/images/Singapore/POTTEDROSEMARY.PNG",
          inventories: [
    
                 {
                    "id": 108913,
                    "unitName": "1 pot",
                    "price": 7.00,
                    "unitValue": 1.00,
                    "totalStock": 6.00,
                    "stock": 6,
                    "product": {
                        "id": 2552,
                        "archieved": false
                        }
                }
          ],
          productCategory: {
              id: 1551,
              name: "Potted Plants",
              categoryImage: "https://ecom.xircular.io/images/Singapore/POTTEDGOODNESS.PNG",
              description: "-",
              archieved: false
          },
          units: 1
      }

      */
];




export default function  CartReducer (state = initialState, action = {}) {

    switch (action.type) {
      case 'ADD_TO_CART':{
          console.log("inside CartRedducer: ", action.payLoad);
          const item = action.payLoad;
          const cart = state;        

          const updatedCart = findProductIndex(cart, item.id) >= 0
                             ? updateProductUnits(cart, item)
                             : [...cart, item];
                             
        return updatedCart;
        }
      
       case 'UPDATE_ITEM_UNITS': {
        console.log("inside CartRedducer (UPDATE_ITEM_UNITS): ", action.payLoad);
        const payLoad = action.payLoad;
        const cart = state;
        const existingProductIndex = findProductIndex(cart, payLoad.id);
        if(existingProductIndex >= 0){
            let product = cart[existingProductIndex];
            product.units = payLoad.units;

            cart[existingProductIndex] = product;
        }
        return [...cart];


       }



        default:
        return state;

    }

  }


  const findProductIndex = (cart, productId) =>{
    return  cart.findIndex(p => p.id === productId);
  };
  
  const updateProductUnits = (cart, item) =>{
      const productIndex = findProductIndex(cart, item.id);
      const updatedCart = [...cart];
      const existingCartItem = updatedCart[productIndex];
  
      const updatedUnitsOfCartItems = {
          ...existingCartItem,
          units: existingCartItem.units + 1
        };
  
        updatedCart[productIndex] = updatedUnitsOfCartItems;
       
        return updatedCart;   
   };


