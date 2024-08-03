import ItemList from "./ItemList";
import {productos} from "../../productos"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { Button} from "@mui/material";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

const Itemliscontainer = () => {

  const[items, setItems] = useState([]);
  const {name} = useParams();

  useEffect(() => {
    let productosCollection = collection(db, "productos");

    let consulta = productosCollection;
    if (name) {
      consulta = query(productosCollection, where("category", "==", name));
    }

    let getProductos = getDocs(consulta);
    getProductos.then((res) => {
      let arrayValido = res.docs.map((productos) => {
        return { ...productos.data(), id: productos.id };
      }); // []
      setItems(arrayValido);
    });
  }, [name]);
   
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};


export default Itemliscontainer