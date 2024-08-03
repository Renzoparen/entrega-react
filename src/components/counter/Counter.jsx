import { Button } from "@mui/material";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
    return (
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}>

        <button onClick={restar}>Restar</button>
        <h2> {contador} </h2>
        <button onClick={sumar}>Sumar</button>

        <Button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
      </div>
    );
  };