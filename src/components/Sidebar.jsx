import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar" style={{
      width: "240px",
      backgroundColor: "#ffffff",
      borderRight: "2px solid #f7e6dc",
      padding: "30px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
      <span style={{ fontSize: "12px", fontWeight: "700", color: "#8c766b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
        Navigation
      </span>

      <NavLink to="/" style={({ isActive }) => ({
        padding: "12px 15px",
        borderRadius: "8px",
        color: isActive ? "#ff7b54" : "#4a3429",
        backgroundColor: isActive ? "#fff5f0" : "transparent",
        fontWeight: "600",
        display: "block",
        transition: "all 0.2s ease"
      })}>
        🏠 Home Dashboard
      </NavLink>

      <NavLink to="/about" style={({ isActive }) => ({
        padding: "12px 15px",
        borderRadius: "8px",
        color: isActive ? "#ff7b54" : "#4a3429",
        backgroundColor: isActive ? "#fff5f0" : "transparent",
        fontWeight: "600",
        display: "block",
        transition: "all 0.2s ease"
      })}>
        ℹ️ About Store
      </NavLink>
    </aside>
  );
}

export default Sidebar;
