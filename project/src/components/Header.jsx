import './app.css'
import { Link } from "react-router-dom";
function Header(){
    return(

<>
<header className='Header'>
<div className='Title'>
   
    <span className='MenuIcon'>🏫</span> <span className='MenuText'>HoodBoard</span>
    </div>
<div className='Headercontent'>
    <Link to={"/"} className='MenuItem' style={{textDecoration:"none"}}><span  className='MenuIcon'>🏠</span> <span >Home</span> </Link>
   
    <Link to={"/Requests"} className='MenuItem' style={{textDecoration:"none"}}> <span  className='MenuIcon' >📢 </span><span>Requests</span></Link>
   
    <Link to={"/Events"} className='MenuItem' style={{textDecoration:"none"}}><span  className='MenuIcon'>📅 </span> <span>Events</span> </Link>
 
    <Link to={"/Urgent"} className='MenuItem' style={{textDecoration:"none"}}><span  className='MenuIcon'>🚨</span> <span> Urgent</span></Link>
 
    <Link to={"/Add"} className='MenuItem' style={{textDecoration:"none"}}><span  className='MenuIcon'>➕</span> <span>Add</span></Link>
   
    <Link to={"/ChatAdmin"} className='MenuItem' style={{textDecoration:"none"}}><span  className='MenuIcon'> ✉️</span> <span>help</span></Link>
       <div className='Logout'> <span>Logout</span></div>
        
  </div>

</header>
</>

    );
}

export default Header;