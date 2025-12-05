import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const ItemList = ({ lista }) => {
  const { addItem } = useCartContext();

  return (
    <div className="container mt-4">
      <div className="row">
        {lista.map((prod) => (
          <div key={prod.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <Item {...prod}>
              <Link to={`/detail/${prod.id}`} className="btn btn-primary m-1">
                Ver detalle
              </Link>
              <button
                className="btn btn-success m-1"
                onClick={() => addItem(prod)}
              >
                Agregar al carrito
              </button>
            </Item>
          </div>
        ))}
      </div>
    </div>
  );
};
