
import './app.css'

import { useNavigate } from "react-router-dom";

function NewContact(){
const navigate = useNavigate();
function handleCancel(){
    navigate("/");
}
    return(
<div>


<div class="form-containera">
    
    <div style={{display:"flex" , flexDirection:"row"}}>
   <div style={{marginLeft:"auto", marginRight:"auto"}}> <h2>Add New Contact</h2></div>
   <div style={{color:"blue" , cursor:"pointer"}} onClick={handleCancel}>X</div>
</div>
    <form>
        <div className="form-groupa">
            <label >First Name</label>
            <input type="text" id="firstName" placeholder="Enter first name" required></input>
        </div>

        <div className="form-groupa">
            <label >Last Name</label>
            <input type="text" id="lastName" placeholder="Enter last name" required></input>
        </div>

        <div className="form-groupa">
            <label >Gmail</label>
            <input type="email" id="gmail" placeholder="example@gmail.com" required></input>
        </div>

        <button type="submit">Add Contact</button>
    </form>
</div>
</div>
    );
}

export default NewContact;