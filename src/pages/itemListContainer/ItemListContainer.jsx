import ItemList from "./ItemList";
import { productos } from "../../productos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Itemliscontainer = () => {

  const[items, setItems] = useState([]);
  const {name} = useParams();

  useEffect(() => {
    const getproductos = new Promise((resolve, reject) => {
      let x = true;
      let arrayFiltered = productos.filter((productos) => productos.category === name);
      if(x) {
        resolve(name ? arrayFiltered : productos);
        resolve(productos)
      }
    });
    
    getproductos
    .then((res) => {
      setItems(res);
    });
  }, [name]);

  return <ItemList items={items} />;
}

export default Itemliscontainer