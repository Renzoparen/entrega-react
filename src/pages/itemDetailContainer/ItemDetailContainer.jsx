import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "../../productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let products = productos.find((products) => products.id === +id);
    if (products) {
      setItem(products);
    }
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;