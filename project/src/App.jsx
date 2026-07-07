import { use, useState } from 'react';
import Header from './components/Header.jsx';
import NavBar from './components/navbar.jsx';
import Footer from './components/Footer.jsx';
import "./components/app.css";
import Chat from "./components/chat.jsx";
import Card from "./components/card.jsx";
import Chatbox from './components/chatbox.jsx';


// App.jsx
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add.jsx";
import root from "./App.jsx";
import NewContact from './components/NewContact.jsx';
import Urgentv1 from './components/Urgent.jsx';
import UrgentReq from './components/UrgentReq.jsx';
import ChatAdmin from './components/ChatAdmin.jsx';
import Requests from './components/Requests.jsx';
import Events from './components/Events.jsx';
import ViewOrder from './components/ViewOrder.jsx';
import { useNavigate } from 'react-router-dom';
import ViewEventDetails from './components/ViewEventDetails.jsx';
function App() {
  const [Closechat, setClosechat] = useState(true);
  //const [Showbar,setShowbar] =useState(false);

  function handlechat(e){
    setClosechat(false);
  }

    function handleclosechat(e){
    setClosechat(true);
  }

  function handlesidebar(){
setShowbar(prev=>!prev);
  }

  function handleAddContact(e){

  }

  const navigate = useNavigate();
  function handleViewDetails(e){
  navigate("/ViewOrder");
  }

  //   function handleEventDetails(e){
  // navigate("/ViewEventDetails");
  // }
  return (

<>


   

    <div className='Layout'>
   <header><Header></Header></header>
   
      <div className='Main'>
    <nav style={{display:"flex" , flexDirection:"column"}}>
{ <NavBar>
<Chat click={handlechat} ></Chat>
<Chat click={handlechat}></Chat>
<Chat click={handlechat}></Chat>
</NavBar>}
    { /* <div><button style={{width:"20em", position:"fixed" ,marginTop:"40.5em",cursor:"pointer"}} onClick={handlesidebar}>View/Hide Contacts</button></div>*/}
   </nav>
   
    <div>
   
<article>
        <Routes>
        <Route path="/" element={root} />
        <Route path="/Add" element={<Add />} />
        <Route path="/NewContact" element={<NewContact />} />
        <Route path="/Urgent" element={<UrgentReq />} />
     
     <Route path="/ChatAdmin" element={<ChatAdmin />} />
     <Route path="/Requests" element={<Requests />}/>
      <Route path="/Events" element={<Events />}>
        <Route path="ViewEventDetails" element={<ViewEventDetails />}/>
     </Route>
         <Route path="/ViewOrder" element={<ViewOrder />}/>
         
      </Routes>
  {Closechat==false ?<Chatbox click={handleclosechat}></Chatbox> :null}
  <div style={{height:"50px" , margin:"20px",marginLeft:"25em"}} ><input placeholder='Search' style={{width:"80%",height:"100%" , textAlign:"center", fontSize:"30px"}}></input> <select style={{marginLeft:"5em"}}><option value=""></option><option value="teacher">Teachers</option></select></div>
<div className='maincontent'>


  <Card click={handleViewDetails}></Card>
  <Card click={handleViewDetails}></Card>
    <Card click={handleViewDetails}></Card>
      <Card click={handleViewDetails}></Card>
       <Card click={handleViewDetails}></Card>

  <Card click={handleViewDetails}></Card>
  <Card click={handleViewDetails}></Card>
    <Card click={handleViewDetails}></Card>
      <Card click={handleViewDetails}></Card>
       <Card click={handleViewDetails}></Card>



  <Card click={handleViewDetails}></Card>
  <Card click={handleViewDetails}></Card>
    <Card click={handleViewDetails}></Card>
      <Card click={handleViewDetails}></Card>
       <Card click={handleViewDetails}></Card>



  <Card click={handleViewDetails}></Card>
  <Card click={handleViewDetails}></Card>
    <Card click={handleViewDetails}></Card>
      <Card click={handleViewDetails}></Card>
       <Card click={handleViewDetails}></Card>




          

</div>
</article>

</div>


</div>

    </div>
    </>
  )
}

export default App
