import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = () => {
    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <footer style={{
      backgroundColor: "#008080", // Teal color as shown in wireframe
      color: "white",
      padding: "20px",
      marginTop: "40px"
    }}>
      {/* Newsletter Signup Section */}
      <div style={{
        backgroundColor: "#f5f5f5",
        color: "black",
        padding: "15px",
        marginBottom: "20px",
        textAlign: "center"
      }}>
        <h4>SIGN UP FOR OUR DAILY INSIDER</h4>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: "1",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            onClick={handleSignup}
            style={{
              padding: "8px 20px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#008080",
              color: "white",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
        {message && <p>{message}</p>}
      </div>

      {/* Footer Navigation */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "left"
      }}>
        {/* Explore Section */}
        <div>
          <h4>Explore</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4>Support</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div>
          <h4>Stay Connected</h4>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="#" style={{ color: "white" }}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" style={{ color: "white" }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" style={{ color: "white" }}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        marginTop: "20px",
        paddingTop: "20px",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "1200px",
        margin: "20px auto 0"
      }}>
        <div>
          <span>DEV@Deakin 2022</span>
        </div>
        <div style={{
          display: "flex",
          gap: "20px"
        }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Terms</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;