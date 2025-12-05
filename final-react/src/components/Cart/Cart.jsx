import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Cart.css";

export const Cart = () => {
  const { cart, increment, decrement, deleteItem, clearCart, total, checkout } =
    useCartContext();

  if (cart.length === 0) {
    return <h2 className="empty-cart">El carrito está vacío</h2>;
  }

  return (
    <div className="cart-container">
      {cart.map((p) => (
        <div className="cart-card" key={p.id}>
          
          {/* ✔ Imagen correcta usando imageUrl */}
          <img
            src={p.imageUrl}
            alt={p.description}
            className="cart-img"
          />

          <div className="cart-info">
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <p>Cantidad: {p.quantity}</p>

            <div className="cart-buttons">
              <button onClick={() => decrement(p.id)}>-</button>
              <button onClick={() => increment(p.id)}>+</button>
              <button onClick={() => deleteItem(p.id)}>Eliminar</button>
            </div>
          </div>
        </div>
      ))}

      <h2 className="total">Total: ${total()}</h2>

      <button className="checkout-btn" onClick={checkout}>
        Finalizar Compra
      </button>

      <button className="clear-btn" onClick={clearCart}>
        Vaciar Carrito
      </button>
    </div>
  );
};
