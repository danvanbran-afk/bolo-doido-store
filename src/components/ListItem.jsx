function ListItem({ item, deleteAction }) {
    return (
        <div className="item-card" style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{item.name}</h3>
            <p>
        Status: {item.isCompleted ? "✔️" : "❌"}
      </p>
            <button onClick={() => deleteAction(item.id)}>Delete</button>
         </div>
    );
}

export default ListItem;