import { useNavigate } from "react-router-dom";
import "./LinkSentPage.css";
import logo from "../assets/Logo.png";
import neptune from "../assets/Neptune.png";

const LinkSentPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/", { state: { showPopup: true } }); // Pass state to trigger the popup
  };

  return (
    <div className="link-sent-container">
      
      <header>
        <div className="logo-sectio">
          <img src={logo} alt="Logo" className="log" />
          <img src={neptune} alt="" className="nep" />
        </div>
      </header>

      
      <div className="link-sent-content">
        <h1 className="link-sent-heading">
          We’ve Sent You <span className="new-line">Another Link</span>
        </h1>
        <p className="link-sent-tex">
          Kindly check your email. We’ve sent you{" "}
          <span className="highlight">another link to reset your password.</span>
        </p>
        <p className="link-sent-text">
          If you still don’t get the email, please check your{" "}
          <a href="spam" className="spam-link">
            Spam Folder
          </a>
          .
        </p>
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
        <p className="signin-link">
          Need help? <a href="/login">Contact Support</a>
        </p>
      </div>
    </div>
  );
};

export default LinkSentPage;
