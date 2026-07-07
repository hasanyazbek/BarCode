import './app.css'
import { useNavigate } from 'react-router-dom';
function ChatAdmin(){
    const navigate = useNavigate();
    function handleCancel(){
        navigate("/");
    }
    return(


<div class="chat-containera">
    
    <div class="chat-headera">
        <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{marginLeft:"auto" , marginRight:"auto"}}>
        Chat with Admin
        </div>
        <div style={{cursor:"pointer"}} onClick={handleCancel}>X</div>
        </div>
    </div>
   
   

    <div class="chat-messagesa">
        <div class="messagea admin">
            <div class="bubble">
                Hello! How can I help you today?
            </div>
        </div>

        <div class="messagea user">
            <div class="bubble">
                Hi Admin, I need support.
            </div>
        </div>
    </div>

    <div class="chat-inputa">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
    </div>
</div>


    );
}
export default ChatAdmin;