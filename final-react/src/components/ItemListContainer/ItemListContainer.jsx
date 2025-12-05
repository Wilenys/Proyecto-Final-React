import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar los productos");
        }
        return res.json();
      })
      .then((data) => {
        if (categoryId) {
          const filtrados = data.filter(
            (prod) => prod.category === categoryId
          );
          setProductos(filtrados);
        } else {
          // Si NO hay categoría, NO mostramos nada.
          setProductos([]);
        }
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
      });
  }, [categoryId]);

  return (
    <section>
      <ItemList lista={productos} />
    </section>
  );
};

