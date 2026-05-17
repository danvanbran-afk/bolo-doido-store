import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-container" style={{ padding: "50px", textAlign: "center" }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "#007bff", textDecoration: "underline" }}>
        Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;
