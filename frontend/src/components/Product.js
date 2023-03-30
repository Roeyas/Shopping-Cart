import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imgSrc, name, description, price, infoButton }) => {
  return (
    <div className="product">
      <img src={imgSrc} alt={name} />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description}</p>
        <p className="info__price">{price}</p>
        <Link to={`/product/${1111}`} className="info__button">
          {infoButton}
        </Link>
      </div>
    </div>
  );
};

export default Product;
