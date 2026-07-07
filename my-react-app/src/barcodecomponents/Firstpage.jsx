
import { useEffect, useState } from "react";


import "./firstpage.css";



import Product from "./Product.jsx";
import BarcodeScanner from "./BarcodeScanner.jsx";

function Firstpage(){
//1)show the products with barcode 
//2) add / remove product to cart and always display the cart 
//3) onscan of product we should add it to the cart by cartid 

const [Products , setProducts] = useState([]);//all products 
const [Cartid , setCartid] = useState(null) ; //current cart 
const [CartProducts , setCartProducts] = useState([]);//current cart products 
const [Error,setError] = useState([]);
let Totalprice = 0;
      
     
      async function getcartproducts(){
   const graphqlQuery = {
        query: `
      query {
getcartproducts(cartid:${Cartid}){
  cartid
  prodid
  prodname
  quantity
  productprice
  }
   }
        `,
      };
  
  
  
      try {
        
        const res = await fetch('https://barcode-osmb.onrender.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(graphqlQuery),
        });
  
        const data = await res.json();
        if(data.data  && data.data.getcartproducts){
            

         return(data.data.getcartproducts);
        }
        else
            return null ;
      } catch (err) {
      //   console.error(err);
        setError('Server error. Please try again later.');
  
      }
      };


        async function getproducts(){
   const graphqlQuery = {
        query: `
      query {
getproducts{
  id
  name
  price
  barcode
  }
   }
        `,
      };
  
  
  
      try {
        
        const res = await fetch('https://barcode-osmb.onrender.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(graphqlQuery),
        });
  
        const data = await res.json();
        if(data.data  && data.data.getproducts){

         return(data.data.getproducts);
        }
        else
            return null ;
      } catch (err) {
      //   console.error(err);
        setError('Server error. Please try again later.');
  
      }
      };


              async function createnewcart(){
   const graphqlQuery = {
        query: `
      mutation {
createnewcart{
  cartid
  }
   }
        `,
      };
  
  
  
      try {
        
        const res = await fetch('https://barcode-osmb.onrender.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(graphqlQuery),
        });
  
        const data = await res.json();
        if(data.data  && data.data.createnewcart){

         return(data.data.createnewcart);
        }
        else
            return null ;
      } catch (err) {
      //   console.error(err);
        setError('Server error. Please try again later.');
  
      }
      };





  async function findproductbycode(code) {
    

    // Fetch the product from your backend

      const graphqlQuery = {
        query: `
      query {
getproductbycode(code:"${code}"){
  id
  name
  price
  barcode
  }
      }
        `,
      };
  
  
  
      try {
        
        const res = await fetch('https://barcode-osmb.onrender.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(graphqlQuery),
        });
  
        const data = await res.json();
        if(data.data  && data.data.getproductbycode){
           //const product = data.data.getproductbycode;

         return(data.data.getproductbycode);
        }
        else
            return null ;
      } catch (err) {
      //   console.error(err);
        setError('Server error. Please try again later.');
  
      }

  };


 async function addproduct(Cartid, prodid, prodname , prodprice){
  //since already prodname is read as string  ,prodid int , cartid int , prodprice float
                console.log("Adding in add product function:", {
            cartid: Cartid,
            prodid: prodid,
            name: prodname,
            price: prodprice
        });
const graphqlQuery = {
        query: `
      mutation {
addtocart(cartid:${Cartid},prodid:${prodid},name:"${prodname}",price:${prodprice}){
  cartid
  prodid
  prodname
  quantity
  productprice
  }
}
        `,
      };
  
  
  
      try {
        
        const res = await fetch('https://barcode-osmb.onrender.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(graphqlQuery),
        });
  
        const data = await res.json();
        if(data.data  && data.data.addtocart){

         return(data.data.addtocart);
        }
        else
            return null ;
      } catch (err) {
      //   console.error(err);
        setError('Server error. Please try again later.');
  
      }
 }


 async function removeproduct(id) {
  const graphqlQuery = {
        query: `
      mutation {
removeprod(cartid:${Cartid},prodid:${id})
  }
        `,
      };
  
  
  
      try {
        
        const res = await fetch('https://barcode-osmb.onrender.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(graphqlQuery),
        });
  
        const data = await res.json();
        if(data.data  && data.data.removeprod){

         return(data.data.removeprod);
        }
        else
            return null ;
      } catch (err) {
      //   console.error(err);
        setError('Server error. Please try again later.');
  
      }
 }










  //non-database functions 

 async function handlecheckout(){
    //end current cart
    //setCartid(prev=> null);
    setCartProducts(prev=>[]);
    //create new cart 
    const newcartid = await createnewcart();
    setCartid(prev=> newcartid);
  }

  async function handleScan(decodedbarcode){//decoded by BarcodeScanner
    //get product by barcode
    console.log("Scanned barcode in function:", typeof(decodedbarcode));
    const product = await findproductbycode(decodedbarcode);
    console.log("product found is :",product?.name);
    //should add to database 
    if(product){
              console.log("Adding:", {
            cartid: Cartid,
            prodid: product?.id,
            name: product?.name,
            price: product?.price
        });

    await addproduct(Cartid, product?.id, product?.name , product?.price);
    }
    //should redisplay the cartproducts
   const products = await getcartproducts();
   console.log("i have now prods: ",products);
    setCartProducts(prev=>products);
  }

  async function handleremoveproduct(productid){

  await removeproduct(productid);
  //should redisplay the cart
  const products = await getcartproducts(Cartid);
  setCartProducts(prev=>products);

  }


  //Rendering Part
  async function onload(){
  const allprod = await getproducts();
  //fetch all products from database onmount
  setProducts(prev=> allprod);
  //create new cart since this is the first mount
  const newcartid = await createnewcart();
  setCartid(prev=> newcartid?.cartid);
  }
           useEffect(()=>{

    onload();
           }
  
  
      ,[])


//                  useEffect( async ()=>{
// //when we add/remove a product we should recalculate the totalprice of the cart 

// //getprice()
  
//       },[CartProducts])//add or remove product 

return(
<div style={{width:"100%", display:"flex",flexDirection:"column", alignItems:"center"}}>



    <div style={{alignItems:"center",alignContent:"center",textAlign:"center" }}>
        
    <div style={{width:"100%"}}> <h1>Scan Product</h1></div> 

     <div style={{width:"100%"}}><BarcodeScanner onScan={handleScan} /></div> 
{/* 
      <h3>Scanned Barcode:</h3>
      <p>{barcode}</p> */}
  
</div>

    <div className="cart-summary" style={{width:"100%" }} >
      <h1>cartid:{Cartid}</h1>
      <h2>Order Summary</h2>

{//display cartproducts once new cart (cartid) is created 
Cartid!=null ? CartProducts?.map((x,index)=>{
  Totalprice = Totalprice + x.productprice * x.quantity;
    return(
    
<div key={x.prodid}>
    <Product name={x.prodname} price = {x.productprice} id= {x.prodid} barcode={null} quantity={x.quantity} handleremoveproduct={handleremoveproduct}></Product>
    </div>
      
    )}):null
}

<h2>Total Price : {Totalprice}</h2>

      <button className="checkout-btn" onClick={()=>handlecheckout}>Checkout</button>
    </div>

  {/* <main className="cart-container" style={{flexDirection:"column", display:'flex'}}> */}


    <section className="cart-items"> 
      
      { <h1>Products:</h1>
{//display all products
  Products?.map((x,index)=>{
    return(
      <div key={x.id} className="cart-item">
        <Product name={x.name} price = {x.price} id= {x.id} barcode={x.barcode} handleremoveproduct={handleremoveproduct}></Product>
      </div>
    )
  })
} }
      {/* <div className="cart-item">
        <img src="https://via.placeholder.com/100" alt="Product"></img>
        <div className="item-details">
          <h3>Product Name 1</h3>
          <p>$25.00</p>
        </div>

        <div className="quantity">
          <button>-</button>
          <input type="number" value="1" min="1"></input>
          <button>+</button>
        </div>

        <button className="remove">Remove</button>
      </div>

      <div className="cart-item">
        <img src="https://via.placeholder.com/100" alt="Product"></img>
        <div className="item-details">
          <h3>Product Name 2</h3>
          <p>$40.00</p>
        </div>

        <div className="quantity">
          <button>-</button>
          <input type="number" value="2" min="1"></input>
          <button>+</button>
        </div>

        <button className="remove">Remove</button>
      </div> */}

    </section> 


{/* 

  </main> */}
</div>

);
}

export default Firstpage;
