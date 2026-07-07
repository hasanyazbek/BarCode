
import "./app.css"
import { useNavigate } from "react-router-dom";

function navbar({Click,children }){


    const navigate =  useNavigate();
function AddContact(event) {
event.preventDefault();
   navigate("/NewContact");

}
return(
    <div className='sidebar'>
      <main style={{felx:"1"}}>
      <header>Chats 💬</header>
      {children}
      </main>
      <footer> <div onClick={AddContact}>👤add new contact</div></footer>
    </div>
 

);
    
}
export default navbar;