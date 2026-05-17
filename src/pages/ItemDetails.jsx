import { useParams, Link } from "react-router-dom";

function ItemDetails() {
  const { itemId } = useParams();

  return (
    <div className="item-details-container">
      <h2>Item Details</h2>
      <p>Viewing details for item ID: {itemId}</p>
      <Link to="/" style={{ color: "#007bff" }}>Back to Dashboard</Link>
    </div>
  );
}

export default ItemDetails;
