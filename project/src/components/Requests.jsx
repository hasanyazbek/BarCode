
import './app.css'



function Requests(){
return(
<div className="requests-container">
    <h2>My Requests</h2>

    <div className="request-card pending">
        <div className="request-header">
            <span className="request-title">Password Reset Issue</span>
            <span className="request-status">Pending</span>
        </div>
        <p className="request-message">
            I am unable to reset my password using the email link.
        </p>
        <div className="request-footer">
            <span>Request ID: #1023</span>
            <span>Submitted: 05 Feb 2026</span>
        </div>
    </div>

    <div className="request-card in-progress">
        <div className="request-header">
            <span className="request-title">Payment Not Processed</span>
            <span className="request-status">In Progress</span>
        </div>
        <p className="request-message">
            My payment was deducted but order is not confirmed.
        </p>
        <div className="request-footer">
            <span>Request ID: #1017</span>
            <span>Submitted: 03 Feb 2026</span>
        </div>
    </div>

    <div className="request-card resolved">
        <div className="request-header">
            <span className="request-title">Account Verification</span>
            <span className="request-status">Resolved</span>
        </div>
        <p className="request-message">
            Please help me verify my account.
        </p>
        <div className="request-footer">
            <span>Request ID: #1009</span>
            <span>Submitted: 01 Feb 2026</span>
        </div>
    </div>

    
    <div className="request-card resolved">
        <div className="request-header">
            <span className="request-title">Account Verification</span>
            <span className="request-status">Resolved</span>
        </div>
        <p className="request-message">
            Please help me verify my account.
        </p>
        <div className="request-footer">
            <span>Request ID: #1009</span>
            <span>Submitted: 01 Feb 2026</span>
        </div>
    </div>


    
    <div className="request-card resolved">
        <div className="request-header">
            <span className="request-title">Account Verification</span>
            <span className="request-status">Resolved</span>
        </div>
        <p className="request-message">
            Please help me verify my account.
        </p>
        <div className="request-footer">
            <span>Request ID: #1009</span>
            <span>Submitted: 01 Feb 2026</span>
        </div>
    </div>

</div>


);
}

export default Requests;