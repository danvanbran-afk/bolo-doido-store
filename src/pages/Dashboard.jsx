import { useState } from "react";
import productsData from "../../products.json";

function Dashboard() {
  const [items, setItems] = useState(productsData);
  const [itemToEdit, setItemToEdit] = useState(null);

  const handleAddItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {
      id: crypto.randomUUID(),
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      price: Number(formData.get("price")),
    };
    setItems((prev) => [...prev, newItem]);
    e.target.reset();
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedItem = {
      id: itemToEdit.id,
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      price: Number(formData.get("price")),
    };
    setItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setItemToEdit(null);
  };

  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  
  const getCategoryColor = (category) => {
    const cat = category?.toLowerCase() || "";
    if (cat === "beauty") return "#ffd3b6";
    if (cat === "fragrances") return "#ffaaa5";
    if (cat === "electronics") return "#dcedc1";
    if (cat === "furniture") return "#a8e6cf";
    if (cat === "groceries") return "#ff8b94";
    return "#ff7b54";
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      
      <div className="forms-section" style={{ marginBottom: "30px" }}>
        {!itemToEdit ? (
          <form onSubmit={handleAddItem} className="project-form">
            <h3>Create New Item</h3>
            <div className="form-group">
              <input name="title" type="text" placeholder="Title" required />
            </div>
            <div className="form-group">
              <input name="description" type="text" placeholder="Description" required />
            </div>
            <div className="form-group">
              <input name="category" type="text" placeholder="Category" required />
            </div>
            <div className="form-group">
              <input name="price" type="number" placeholder="Price" min={0} step="0.01" required />
            </div>
            <button type="submit">Add Item</button>
          </form>
        ) : (
          <form key={itemToEdit.id} onSubmit={handleUpdateItem} className="project-form">
            <h3>Update Item</h3>
            <div className="form-group">
              <input name="title" type="text" defaultValue={itemToEdit.title} required />
            </div>
            <div className="form-group">
              <input name="description" type="text" defaultValue={itemToEdit.description} required />
            </div>
            <div className="form-group">
              <input name="category" type="text" defaultValue={itemToEdit.category} required />
            </div>
            <div className="form-group">
              <input name="price" type="number" defaultValue={itemToEdit.price} min={0} step="0.01" required />
            </div>
            <div className="form-actions">
              <button type="submit">Save Changes</button>
              <button type="button" onClick={() => setItemToEdit(null)}>Cancel</button>
            </div>
          </form>
        )}
      </div>

      <div className="items-list">
        {items.map((item) => {
          const backgroundColor = getCategoryColor(item.category);
          const initials = item.title ? item.title.substring(0, 2).toUpperCase() : "BD";
          
          return (
            <div key={item.id} className="item-card">
              
              <div style={{
                width: "100%",
                height: "160px",
                backgroundColor: backgroundColor,
                borderRadius: "12px",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: "700",
                color: "#4a3429",
                opacity: 0.85,
                border: "1px solid rgba(74, 52, 41, 0.1)"
              }}>
                {initials}
              </div>

              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p style={{ display: "inline-block", backgroundColor: "#fff5f0", padding: "4px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "600", color: "#ff7b54" }}>
                  {item.category.toUpperCase()}
                </p>
              </div>
              
              <p className="price-tag">${item.price.toFixed(2)}</p>
              
              <div className="item-card-actions">
                <button onClick={() => setItemToEdit(item)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
