import { ProductCard } from "../../components/productCard/ProductCard";

const ItemList = ({ items }) => {
    return (
      <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
        {items.map((element) => {
          return (
            <ProductCard
              key={element.id}
              title={element.title}
              description={element.description}
              price={element.price}
              id={element.id} 
              img={element.img}
            />
          );
        })}
      </div>
    );
  };
  
  export default ItemList;  