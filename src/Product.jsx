import "./Product.css";

function Product({title, price ="1"}) {
  console.log(title);
    return (
          <div className="Product">
            <h3>{title},</h3>
            <h5>price: {price}</h5>
          </div>
    );
}

export default Product;