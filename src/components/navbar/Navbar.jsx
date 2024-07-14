import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <>
        <div className="nav">
          <Link to="/">
            <img src="https://res.cloudinary.com/dugh35cnu/image/upload/v1720051785/logo_react_dxyytd.webp" alt="" />
          </Link>
          <ul className="categorias">
            <Link to="/category/stock">En Stock</Link>
            <Link to="/category/novedades">Nueva Colección</Link>
            <Link to="/category/liquidacion">Liquidación invierno</Link>
          </ul>
          <CartWidget />
        </div>
      </> 
    </div>
  );
};


