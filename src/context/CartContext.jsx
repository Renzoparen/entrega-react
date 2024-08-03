import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProov = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productos) => {
    let existe = isInCart(productos.id);
    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === productos.id) {
          return {
            ...elemento, cantidad: productos.cantidad,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, productos]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let existe = cart.some((productos) => productos.id === id);
    return existe;
  };

  const deleteProduct = (id) => {
    let newArr = cart.filter((elemento) => elemento.id !== id);
    setCart(newArr);
  };

  const getQuantityById = (id) => {
    let productoSelec = cart.find((productos) => productos.id === id);
    return productoSelec?.cantidad; 
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.cantidad;
    }, 0);
    return total;
  };  


  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0);
    return total;
  };

  let data = { cart, addToCart, clearCart, deleteProduct, getQuantityById, getTotalItems, getTotalPrice };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProov;