import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 👉 Verificar si existe
  const exists = (id) => {
    return cart.some((p) => p.id === id);
  };

  // 👉 Agregar producto (si existe, suma SIEMPRE 1)
  const addItem = (item) => {
    const productExists = cart.find((p) => p.id === item.id);

    if (productExists) {
      // 🔥 Incrementar +1 siempre que ya exista
      setCart((prev) =>
        prev.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
    } else {
      // 🔥 Agregar por primera vez con quantity = 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // 👉 Incrementar cantidad manualmente
  const increment = (id) => {
  setCart(prev =>
    prev.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p)
  );
};

  // 👉 Disminuir cantidad manualmente
  const decrement = (id) => {
  setCart(prev =>
    prev.map(p => p.id === id && p.quantity > 1
      ? { ...p, quantity: p.quantity - 1 }
      : p
    )
  );
};

  // 👉 Eliminar product
  const removeItem = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  // 👉 Alias requerido por tu Cart.jsx
  const deleteItem = (id) => removeItem(id);

  // 👉 Vaciar carrito
  const clearCart = () => setCart([]);

  // 👉 Total de cantidades
  const getTotalItems = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  // 👉 Total en dinero
  const getTotalPrice = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // 👉 Alias requerido por tu Cart.jsx
  const total = () => getTotalPrice();

  // 👉 Finalizar compra
  const checkout = () => {
    alert("Compra realizada con éxito");
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        exists,
        increment,
        decrement,
        removeItem,
        deleteItem,
        clearCart,
        getTotalItems,
        getTotalPrice,
        total,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

