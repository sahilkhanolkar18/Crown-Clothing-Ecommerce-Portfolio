import { createContext, useState, useEffect} from "react";


const addCartItem = (cartItems, productToAdd) => {
    const exsitingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )
    if(exsitingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
         {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}


export const CartContext = createContext({
    cartDropdown: false,
    setCartDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    changeQuantity: () => {},
    total: 0
})

const changeQuantityMethod = (cartItems, productId, operation) => {
    const findCartItem = cartItems.find(
      (cartItem) => cartItem.id === productId
    );
  
    if (findCartItem) {
      if (operation === "Add") {
        return cartItems.map((cartItem) => cartItem.id === productId ?
        {...cartItem, quantity: cartItem.quantity + 1} : cartItem
       )
      } else if (operation === "Subtract" && findCartItem.quantity > 1) {
        return cartItems.map((cartItem) => cartItem.id === productId ?
        {...cartItem, quantity: cartItem.quantity - 1} : cartItem
       )
      }
    }
  
    return cartItems;
  };

  const removeItemLogic = (cartItems, productId) => {
    const findCartItem = cartItems.find((cartItem) => cartItem.id === productId);
  
    if (findCartItem) {
      cartItems = cartItems.filter((item) => item.id !== findCartItem.id);
    }
  
    return cartItems;
  }


export const CartContextProvider = ({children}) => {
    const [ cartDropdown, setCartDropdown] = useState(false)
    const [cartItems , setCartItems] = useState([])
    const [cartCount , setCartCount] = useState([])
    const [total, setTotal] = useState(0)

   useEffect(() => {
        const theCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        let calcTotal = cartItems.map((item) => item.quantity * item.price)
        const sum = calcTotal.reduce((accumulator, value) => {
            return accumulator + value;
          }, 0);

        setCartCount(theCount)
        setTotal(sum)

        }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))

    }

    const changeQuantity = (productId, Operation) => {
        setCartItems(changeQuantityMethod(cartItems, productId, Operation))
    }

    const removeItem = (productId) => {
        setCartItems(removeItemLogic(cartItems, productId))
    }
    

    const value = {cartDropdown, setCartDropdown, cartItems, addItemToCart ,cartCount, changeQuantity, removeItem, total}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}



