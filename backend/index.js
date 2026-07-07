const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { Pool } = require("pg");


const cors = require("cors");






//formatting created_at time: 
const { GraphQLScalarType, Kind } = require("graphql");

const DateTime = new GraphQLScalarType({
  name: "DateTime",
  description: "Formatted date-time scalar",

  serialize(value) {
    // value coming from DB → Date object
    return new Date(value).toISOString(); // or any format you want
  },

  parseValue(value) {
    // value from client → server
    return new Date(value);
  },

  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});


// PostgreSQL connection
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "BarCode",
//   password: "password",
//   port: 5432,
// });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// GraphQL schema
/*
type Mutation
In GraphQL, there are two main types of operations:
Query → used to read/fetch data (like getting users, chats, requests)
Mutation → used to change/write data (like creating a chat, updating a request, or signing in)
*/



  //   type Query {
  //   hello: String
  //   users: [User]
  //   chat:[Chat]
  //   admins: [Admin]
  //   userrequests(username: String!): [Request]
  //   allrequests:[Request]
  //   requestbyid(id:ID!):Request
  //   sentmessages(user1:String!,user2:String!):[Chat]
  //   receivedmessages(user1:String!,user2:String!):[Chat]
  //   allcontacts(user:String!):[Contact]
  //   allmessages(user1:String! , user2:String!):[Chat]
  //   allreceivedmessages(user:String!):[Chat]
  //   allinboxmessages(user:String!):[Chat]
  //   requestsbycategory(category:String!):[Request]
  //   getallevents:[Event]
  //   geteventbyid(id:ID!):Event
  // }

  // type Mutation {
//   signin(email: String!, password: String!): SignInResponse
//   createRequest(title: String!, description: String!, bonus:String!, reqby:String!,location:String!, jobtype: String! ,worklocation: String! ,experience: String!, category: String! , isurgent:Boolean!): Request
//   sendMessage(user1: String!, user2 : String!, content: String!):Chat
//   createContact(user1:String! , firstname:String! ,lastname:String!, gmail:String! ): Contact
//   setrequesturgent(id:ID!): Request
//   changestatus(id:ID! , newstatus: String!):Request
//   createevent(title:String! , description:String! ,location:String!, date:DateTime, start_time:Time , end_time:Time , organizer:String!):Event
//   deletereqbyid(id:ID!):DeleteResponse
//   deleteeventbyid(id:ID!):DeleteResponse
//   signup(name: String!, email: String!, password: String!): SignInResponse
//   }























  // type Query {
  //   hello: String
  //   users: [User]
  //   chat:[Chat]
  //   admins: [Admin]
  //   userrequests: [Request]
  //   allrequests:[Request]
  //   requestbyid(id:ID!):Request
  //   sentmessages(user2:String!):[Chat]
  //   receivedmessages(user2:String!):[Chat]
  //   allcontacts:[Contact]
  //   allmessages(user2:String!):[Chat]
  //   allreceivedmessages:[Chat]
  //   allinboxmessages:[Chat]
  //   requestsbycategory(category:String!):[Request]
  //   getallevents:[Event]
  //   geteventbyid(id:ID!):Event
  // }

  //ID : is always serialized as string 
  

const schema = buildSchema(`
    scalar DateTime
    scalar Time
  type Query {
getproductbycode(code:String):Product
getcartproducts(cartid:ID):[CartProduct]
getproducts:[Product]
  }

     type Mutation {
addtocart(cartid:ID! , prodid:ID!,name:String, price:Float):CartProduct
removeprod(cartid:ID!, prodid:ID!):String
createnewcart:Cart
   }

type Product {
  id: Int!
  name: String
  price: Float
  barcode: String
}

type CartProduct{
  cartid: Int
  prodid: Int
  prodname:String
  quantity: Int
  productprice: Float

}

type Cart{
cartid:Int
}

`);

const app = express();
  const allowedorigin=["http://localhost:5173", // React app
    "http://localhost:3000",
  "https://bar-code-7fbepl9e5-teamlu.vercel.app"];
app.use(cors({
origin :allowedorigin,
  credentials: true
}));






const http = require("http");
const { Server } = require("socket.io");
const { error } = require("console");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: allowedorigin,
    credentials: true
  }
});


// io.on("connection", (socket) => {
//   console.log("User connected:", socket.id);

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });

// });


// const jwt = require("jsonwebtoken");

// function auth(context) {
//   const authHeader = context.req.headers.authorization;

//   if (!authHeader) {
//     throw new Error("Not authenticated");
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     return jwt.verify(token, process.env.JWT_SECRET);
//   } catch (err) {
//     throw new Error("Invalid or expired token");
//   }
// }


// const bcrypt = require("bcrypt");


// require("dotenv").config();

// console.log(process.env.JWT_SECRET);
// Resolvers
const root = (io)=>({
    DateTime:DateTime,
  hello: () => "Hello from Express + GraphQL 👋",

getproductbycode: async ({code}) =>{
const result = await pool.query(
    "SELECT * FROM products WHERE barcode = $1",
    [code]);
    
  if (result.rows.length === 0) {
    return null; // product not found
  }

  return result.rows[0];
},
getcartproducts: async ({cartid})=>{
  const result = await pool.query(
    "SELECT * FROM cartproducts WHERE cartid = $1",[cartid]);
      if (result.rows.length === 0) {
    return null; // product not found
  }

  return result.rows;
},
getproducts: async ()=>{
  const result = await pool.query(
    "SELECT * FROM products ");
      if (result.rows.length === 0) {
    return null; // product not found
  }

  return result.rows;
}
,
addtocart: async ({cartid , prodid, name, price})=>{
  const searchprod =    await pool.query(  `Select * from cartproducts
     where cartid = $1 and prodid = $2
     `,
    [cartid , prodid]);
     if (searchprod.rows.length > 0) {

    const updated = await pool.query(
      `UPDATE cartproducts
       SET quantity = quantity + 1
       WHERE cartid = $1 AND prodid = $2
       RETURNING *`,
      [cartid, prodid]
    );

    return updated.rows[0];
  }
  
    else{
        // 3. if not exists → get product price first
  // const product = await pool.query(
  //   `SELECT price FROM products WHERE id = $1`,
  //   [prodid]
  // );

  // if (product.rows.length === 0) {
  //   throw new Error("Product not found");
  // }

  // const price = product.rows[0].price;

    const res = await pool.query(  `INSERT INTO cartproducts (cartid,prodid,quantity,prodname ,productprice)
     VALUES ($1, $2, $3,$4,$5)
     RETURNING *`,
    [cartid , prodid, 1 ,name, price ]);//using $1 , $2 ,$3 ,$4 you are treating the parameters as values this prevents sql injection
   
   
    //return res.rows;
      return res.rows[0];  // IMPORTANT
    }
},

removeprod:async ({cartid, prodid})=>{
    const res = await pool.query(
      `DELETE FROM cartproducts WHERE cartid = $1 AND prodid = $2`,
      [cartid, prodid]
    );
    if(res){
      return "removed successfully!";
    }
    else{
      return "failed to remove!";
    }
  }

  ,

  createnewcart:async()=>{
        const res = await pool.query(
      `INSERT INTO cart
DEFAULT VALUES
RETURNING *`
    );
    return res.rows[0];
  }
  

  

  

});




//new updates  19/2/2026

// app.listen(4000, () => {
//   console.log("🚀 Server running at http://localhost:4000/graphql");
// });

// GraphQL endpoint
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     rootValue: root,
//     graphiql: true, // browser UI
//   })
// );


// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     rootValue: root(io),
//     graphiql: true, // browser UI
//   })
// );


app.use(
  "/graphql",
  graphqlHTTP((req) => ({
    schema,
    rootValue: root(io),
    graphiql: true,
    context: { req }   // 🔥 THIS IS THE KEY FIX since without this the context will not read the header of authentication (token) it will not access the request
  }))
);




// server.listen(4000, () => {
//    console.log("🚀 Server running at http://localhost:4000/graphql");
// });

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


// server.listen(4000, () => {
//    console.log("🚀 Server running at http://localhost:4000/graphql");
// });
