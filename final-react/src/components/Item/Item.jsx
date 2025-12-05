export const Item = ({ name, price, description, imageUrl, children }) => {
  return (
    <div className="card h-100">
      <img
        src={imageUrl}
        className="card-img-top"
        alt={description}
        style={{ objectFit: "contain", height: "200px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text fw-bold">Precio: ${price}</p>
        <div className="mt-auto">{children}</div>
      </div>
    </div>
  );
};
