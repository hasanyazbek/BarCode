import './app.css'
import { useNavigate } from 'react-router-dom';
function card({click}){
const navigate = useNavigate;
    function handleclick(e){
        click(e);
       
    }
    return(
        <div className='Request'>

            <div className="order-card">
    <div className="order-header">
        <div>
            <h3>Order #45821</h3>
            <span className="order-date">Placed on 06 Feb 2026</span>
        </div>
        <span className="order-status delivered">Delivered</span>
    </div>

    <div className="order-body">
        <div className="order-item">
            <span>Product Name</span>
            <span>x2</span>
        </div>
        <div className="order-item">
            <span>Another Product</span>
            <span>x1</span>
        </div>
    </div>

    <div className="order-footer">
        <span className="order-total">Total: $125.00</span>
        <button className="order-btn" onClick={handleclick}>View Details</button>
    </div>
</div>

        </div>






    );
}
export default card;