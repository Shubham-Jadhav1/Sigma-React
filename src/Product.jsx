import "./Product.css";

function Product({title, price}) {
  // console.log(title);
 
  // console.log(feature);
  // const list = feature.map((features) => <li>{features}</li>)
  let isDiscount = price > 30000;
  let styles = {backgroundColor: isDiscount ? "orange" : ""};
  
  
    return (
          <div className="Product" style ={styles}>
            <h3>{title}</h3>
            <h5>price: {price} </h5>
            {/* {price > 30000 ? <p>"Discount of 5%" </p>: null} */}
            {isDiscount && <p>Discount of 5%</p>}
            {/* <p>{feature.map((features) => <li>{features}</li>)}</p> */}
           
          </div>
    );
}


export default Product;