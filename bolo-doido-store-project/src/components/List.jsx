import { useState } from "react";
import jsonData from "../data.json";
import ListItem from "./ListItem";

function List() {
  const [items, setItems] = useState(jsonData);

  
  const deleteItem = (id) => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div className="list-container">
      <h2>A Minha Lista</h2>
      {items.length === 0 ? (
        <p>Não há itens na lista.</p>
      ) : (
        items.map((item) => (
          <ListItem 
            key={item.id} 
            item={item} 
            deleteAction={deleteItem} 
          />
        ))
      )}
    </div>
  );
}

export default List;
