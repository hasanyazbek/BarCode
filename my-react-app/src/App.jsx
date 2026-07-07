import { use, useState } from 'react';

// App.jsx
import { Routes, Route } from "react-router-dom";

import { useNavigate,Navigate } from 'react-router-dom';

import Firstpage from "./barcodecomponents/Firstpage.jsx";
function App() {

  //   function handleEventDetails(e){
  // navigate("/ViewEventDetails");

  //   const token = localStorage.getItem("token");
  // const role = localStorage.getItem("role");

  // if(!token){
  //   return  <Navigate to="/signin" />;
  // }
  // }
  return (

<>
<Routes>
  {/* <Route path='/AdminDash' element={<AdminDash/>}></Route>

  <Route path='/' element={<Sign/>}/> */}
  <Route path='/' element={<Firstpage/>}/> 
  
  {/* <Route path='/SignUp' element={<SignUp/>}/>
  <Route path="INBOX" element={<INBOX />}/> */}
  
  {/* <Route path='/userdashboard/:useremail/*' element={<Userdashboard/>}> */}
       {/* <Route path="Requests" element={<Requests />}/>
       <Route path="Add" element={<Add/>} />
       <Route path="NewContact" element={<NewContact />} /> */}
       {/* <Route path="Urgent" element={<UrgentReq />} /> */}
       {/* <Route path="ChatAdmin" element={<ChatAdmin />} /> */}
       {/* <Route path="Events" element={<Events />}>
       <Route path="ViewEventDetails" element={<ViewEventDetails />}/>
       </Route> */}

      {/* <Route path="ViewOrder/:id" element={<ViewOrder />}/> */}
     
  {/* </Route> */}


  {/* <Route path='/admindashboard/:useremail/*' element={<Admindashboard/>}>
      
       <Route path="NewContact" element={<NewContact />} />
       <Route path="Events" element={<Events />}>
       <Route path="ViewEventDetails/:id" element={<ViewEventDetails />}/>
       </Route>
        <Route path="INBOX" element={<INBOX />}/>


  </Route> */}


     {/* <Route path='/userdashboardV1/:useremail/*' element={<UserdashboardV1/>}>

 
  </Route>


      <Route path='/UserDashboardPro/:useremail/*' element={<UserDashboardPro/>}>
      
       <Route path="Requests" element={<Requests />}/>
       <Route path="Add" element={<Add/>} />
       <Route path="NewContact" element={<NewContact />} />
       <Route path="Urgent" element={<UrgentReq />} />
       <Route path="ChatAdmin" element={<ChatAdmin />} />

     

       <Route path="Events" element={<Events />}>
       <Route path="ViewEventDetails/:id" element={<ViewEventDetails />}/>
      </Route>

      <Route path="ViewOrder/:id" element={<ViewOrder />}/>
      <Route path="INBOX" element={<INBOX />}/>
      
      </Route> */}


{/*        
        <Route path="ManageReq" element={<ManageReq />} /> */}
  

</Routes>

    </>
  )
}

export default App
