import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetail.css";

const ItemDetail = ({ item, onAdd, initial}) => {
  return (
<>
      <div>
        <div className={"containerItemDetail"}>
          <div className={"imagen"}>
            <img src={item.img} alt="" />
          </div>

          <div className={"containerDetail"}>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "23px" }}></span> {item.title}
            </h2>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "23px" }}></span> ${item.price}
            </h2>
          </div>
        </div>
        <CounterContainer onAdd={onAdd} stock={item.stock} initial={initial} />
      </div>
    </>
  );
};

export default ItemDetail;