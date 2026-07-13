import Product from "./Product.jsx"

function productTab() {
    return (
        <>
            <Product title="phone" price={30000} />
             <Product title="laptop" price={50000} />
              <Product title="pen" />
           
        </>
    );
}
export default productTab;