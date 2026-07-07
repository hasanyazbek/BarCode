


import { useNavigate } from "react-router-dom";

function Add(){
    const navigate =  useNavigate();
    function GoToChatHome(event) {
event.preventDefault();
   navigate("/");

}
    return(
<div className="request-form-container">
  <div style={{display:"flex" ,flexDirection:"row"}}>

    <div style={{marginLeft:"auto",marginRight:"auto"}}><h2>Create a Request</h2></div>
    <div style={{color:"blue",cursor:"pointer"}} onClick={GoToChatHome}>X</div>

    </div>

  <form className="request-form" onSubmit={ GoToChatHome}>
    <div className="form-group">
      <label >Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter request title"
        required
      />
    </div>

    <div className="form-group">
      <label >Description</label>
      <textarea
        id="description"
        name="description"
        placeholder="Describe your request..."
        rows="5"
        required
      ></textarea>
    </div>

    <div className="form-group">
      <label >Contact Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="example@email.com"
        required
      />
    </div>

    <button type="submit">Submit Request</button>
  </form>
</div>


    );
}
export default Add;