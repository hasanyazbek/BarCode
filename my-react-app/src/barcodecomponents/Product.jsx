import ProductBarcode from "./ProductBarcode.jsx";
import "./firstpage.css"
function Product({name , price , id, barcode ,quantity, handleremoveproduct}) {
//   const product = {
//     id: 25,
//     name: "Laptop",
//     price: 999.99,
//   };



const idstr = ""+id;
const pricestr =""+price;
  return (
    <div className="item-details">
      {/* <h2>{idstr}</h2> */}
      <h2>{name}</h2>
      <p>${pricestr}</p>
      {quantity? 
      <p ><span style={{color:"red"}}>quantity: &nbsp;</span>{quantity}</p>:null
}
      <button onClick={()=>handleremoveproduct(id)}>remove</button>
      {barcode? <ProductBarcode barcode={barcode} />:null}
      
    </div>
  );
}
export default Product;
