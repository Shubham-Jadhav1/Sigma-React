import Product from "./Product.jsx"

function productTab() {
    //  let option = ["Tech","non-Tech", "durable"];
    //  let option2 = { a: "Tech", b: "fast"};
    return (
        <div className="ProductTab">
            <Product title="phone" price={30000} />
             <Product title="laptop" price={50000} />
              <Product title="pen" price="10" />
           
        </div>
    );
}
export default productTab;