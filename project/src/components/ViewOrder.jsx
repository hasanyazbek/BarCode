import './app.css'

import { useNavigate } from 'react-router-dom';
function ViewOrder(){
    const navigate = useNavigate();
    function handleCancel(){
        navigate("/");
    }
    return(


<div className="order-containera" >
  
    <div style={{display:"flex" ,flexDirection:"row"}}>
  
   <div style={{marginLeft:"auto" , marginRight:"auto"}}> <h1>Order Details</h1></div>
   <div style={{color:"blue" , cursor:"pointer" , position:"fixed"}} onClick={handleCancel}>X</div>
    
    </div>
   <span className="order-statusa delivered">Delivered</span>

  

  <section className="order-metaa" style={{marginTop:"10px"}}>
    <div>
      <strong>Order ID:</strong>
      <span>#ORD-10293</span>
    </div>
    <div>
      <strong>Order Date:</strong>
      <span>Feb 4, 2026</span>
    </div>
  </section>

  <section className="shipping-infoa">
    <h2>Shipping Information</h2>
    <p>
      John Doe<br />
      123 Main Street<br />
      New York, NY 10001<br />
      United States
    </p>
  </section>

  <section className="items">
    <h2>Items</h2>

    <div className="itema">
      <div className="item-infoa">
        <h3>Wireless Headphones</h3>
        <p>Qty: 1</p>
      </div>
      <div className="item-pricea">$120.00</div>
    </div>

    <div className="itema">
      <div className="item-infoa">
        <h3>USB-C Charger</h3>
        <p>Qty: 2</p>
      </div>
      <div className="item-pricea">$40.00</div>
    </div>
  </section>

  <section className="order-summarya">
    <div className="summary-rowa">
      <span>Subtotal</span>
      <span>$160.00</span>
    </div>
    <div className="summary-rowa">
      <span>Shipping</span>
      <span>$10.00</span>
    </div>
    <div className="summary-rowa total">
      <span>Total</span>
      <span>$170.00</span>
    </div>
  </section>
</div>



    );
}

export default ViewOrder;