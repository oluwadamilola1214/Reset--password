import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPasswords.css";
import logo from "../assets/Logo.png";
import neptune from "../assets/Neptune.png";
import young from "../assets/young-african-male-taking-photo-slip-using-his-smartphone 1.png";
import eyes from "../assets/🦆 icon _eye alt_@2x.png";

// PasswordField component for handling password visibility toggle
const PasswordField = ({ label, value, onChange, showPassword, togglePasswordVisibility }) => (
  <div className="password-container">
    <h4>{label}</h4>
    <div className="input-with-icon">
      <input
        type={showPassword ? "text" : "password"} // Toggle password visibility based on state
        className="modal-input"
        value={value}
        onChange={onChange}
      />
      <img
        src={eyes}
        alt="Toggle password visibility"
        className="icon"
        onClick={togglePasswordVisibility} // Toggle visibility when clicked
      />
    </div>
  </div>
);

const ResetPasswords = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for toggling confirm password visibility

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSendResetEmail = () => {
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }
    setShowPopup(true);
  };

  const handleContinue = () => {
    setShowPopup(false);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    navigate("/");
  };

  // Toggle password visibility for password field
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Toggle password visibility for confirm password field
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="reset-password-container">
      {/* Left Section */}
      <div className="reset-left-section">
        <header>
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo" />
            <h2 className="logo-name">
              <img src={neptune} alt="neptune" className="neptune" />
            </h2>
          </div>
        </header>

        <div className="divv">
          <p className="info-text">
            Collect all your payments <div>easily wherever you are.</div>
          </p>
          <div className="progress-section">
            <div className="progress-line white"></div>
            <div className="progress-line"></div>
            <div className="progress-line"></div>
          </div>
          <div className="image-wrapper">
            <img src={young} alt="young" className="circle-image" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="reset-right-section">
        <div className="reset-form">
          <h1 className="reset-heading">
            <b>Reset Password</b>
          </h1>
          <h5 className="reset-subheading">
            Enter your email address. We’ll send you a link.
          </h5>
          <h4>Email Address</h4>
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className="send-button"
            onClick={handleSendResetEmail}
            disabled={email.trim() === ""}
          >
            Send Reset Email
          </button>
          <p className="signin-lin">
            Already have an account? <a href="/login"><b>Sign in</b></a>
          </p>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h1 className="link"><b>Reset link sent!</b></h1>
            <p className="check"> Kindly check your email. We’ve sent you a link to reset your password.</p>
            <p className="email">
              If you don’t get an email, click{" "}
              <a href="#" onClick={() => navigate("/link-sent")}>Here</a> to resend another. If you still don’t get an email, please check your spam folder.
            </p>
            <button className="continue-butto" onClick={handleContinue}>
              Continue
            </button>
            <p className="signin-li">
              Need help? <a href="/login">Contact Support</a>
            </p>
          </div>
        </div>
      )}

      {/* Modal for Setting Password */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-heading">Set Your Password</h2>
            <p>Set a new password to log in to your account</p>

            {/* Password Field */}
            <PasswordField
              label="Password"
              value={password}
              onChange={handlePasswordChange}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />

            {/* Confirm Password Field */}
            <PasswordField
              label="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              showPassword={showConfirmPassword}
              togglePasswordVisibility={toggleConfirmPasswordVisibility}
            />

            <button className="confirm-button" onClick={handleConfirm}>
              Confirm
            </button>
            <p className="signin-li">
              Need help? <a href="/login">Contact Support</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPasswords;
