import { Link } from "react-router-dom";
import { Button, hslToRgb } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Swal from "sweetalert2";

const Cart = () => {

  const { cart, clearCart, deleteProduct, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice();

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Quieres quitar el articulo?",
      text: "Se eliminará del carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire({
          title: "¡Listo!",
          text: "Articulo eliminado.",
          icon: "success"
        });
      }
    });
  };


    return (
      <div>
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ border: "3px solid black", display: "flex", justifyContent: "space-around", padding: "2%" }}
          >
            <img src={elemento.img} style={{width: "7%"}} />
            <h2>{elemento.title}</h2>
            <h2>Cantidad: {elemento.cantidad}</h2>
            <h2>${elemento.price}</h2>
            <Button variant="contained" onClick={() => handleDelete(elemento.id)}>Eliminar</Button>
          </div>
        );
      })}

      <h2 style={{textAlign: "center", padding: "2%"}} >
              El total del carrito es {total}
      </h2>
    
      <div style={{textAlign: "center", padding: "2%"}}>
      
      <Link to="/" >
      {cart.length < 1 && <Button variant="contained">Seguir comprando</Button>}
      </Link>

      {cart.length > 0 && <Button variant="contained" onClick={clearCart}> Limpiar carrito </Button>}

      <Link to="/Checkout" >
      
        {cart.length > 0 && <Button variant="contained">Finalizar compra</Button>}
      
      </Link>
        </div>
      </div>
    );
  };
  
  export default Cart;