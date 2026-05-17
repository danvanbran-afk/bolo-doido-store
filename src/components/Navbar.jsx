import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar" style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#ffffff",
      padding: "20px 40px",
      borderBottom: "2px solid #f7e6dc",
      boxShadow: "0 2px 10px rgba(74, 52, 41, 0.03)",
      width: "100%"
    }}>
      <div className="navbar-logo" style={{ fontSize: "22px", fontWeight: "700", color: "#ff7b54" }}>
        🎂 Bolo Doido <span style={{ color: "#4a3429", fontWeight: "400" }}>Store</span>
      </div>
      
      <div className="navbar-links" style={{ display: "flex", gap: "25px", fontWeight: "500", marginRight: "10px" }}>
        <Link to="/" style={{ color: "#4a3429" }}>Dashboard</Link>
        <Link to="/about" style={{ color: "#4a3429" }}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
