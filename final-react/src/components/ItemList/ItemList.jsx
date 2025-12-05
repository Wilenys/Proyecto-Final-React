import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./ItemList.css";


export const ItemList = ({ lista }) => {

  const { addItem } = useCartContext();

  return (
    <>
      {lista.length ? (
        <div className="item-list">
          {lista.map((prod) => (
            <Item key={prod.id} {...prod}>
              
              {/* 🔗 Link al detalle */}
              <Link to={`/detail/${prod.id}`} className="btn">
                Ver detalle
              </Link>

              {/* 🛒 Botón para agregar al carrito */}
              <button
                className="btn"
                onClick={() => addItem(prod)}
              >
                Agregar al carrito
              </button>

            </Item>
          ))}
        </div>
      ) : (
        <p>No hay productos</p>
      )}
    </>
  );
};
