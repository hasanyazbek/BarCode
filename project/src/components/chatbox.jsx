

function chatbox({click}){
    function handleclick(e){
        click(e);
    }
    return(
<div class="chat-container">
  <div class="chat-header" >
   <div style={{marginLeft:"auto", marginRight:"auto"}}>Chat Room</div>
   <div style={{marginBottom:"40px", paddingRight:"3px",paddingLeft:"3px",  borderRadius: "20px",
   marginRight:"1px",
  border: "none",
  backgroundColor:"white",
  color: "#4a76a8",
   fontWeight: "100",
  cursor: "pointer"}} onClick={handleclick}>X</div>
  </div>
  
  <div class="chat-messages">
    <div class="message received">Hello! How are you?</div>
    <div class="message sent">I’m good, thanks! And you?</div>
    <div class="message received">Doing well. What are you up to?</div>
   
  </div>
  <div class="chat-input">
    <input type="text" placeholder="Type a message..."></input>
    <button>Send</button>
  </div>
</div>


    );
    
}
export default chatbox;