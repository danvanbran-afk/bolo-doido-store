// src/pages/ItemDetails.jsx
import { useParams, Link } from "react-router-dom";

function ItemDetails() {
  const { itemId } = useParams();

  return (
    <div>
      <h1>Detalhes do Item: {itemId}</h1>
      {/* Aqui farias o find() no teu JSON usando o itemId */}
      <Link to="/">
        <button>Voltar ao Dashboard</button>
      </Link>
    </div>
  );
}

export default ItemDetails;
