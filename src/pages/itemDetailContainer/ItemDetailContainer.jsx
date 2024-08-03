import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const [item, setItem] = useState({});

  let initial = getQuantityById(+id);

  useEffect(() => {
    let productosCollection = collection(db, "productos");
    let refDoc = doc(productosCollection, id);
    let getProductos = getDoc(refDoc);
    getProductos.then((res) => setItem({ ...res.data(), id: res.id }));
  }, [id]);

  const onAdd = (cantidad) => {
    let objetoFinal = { ...item, cantidad: cantidad }; 
    addToCart(objetoFinal);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "¡Enviado al carrito!"
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial}/>;
};

export default ItemDetailContainer;