// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// Páginas
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content" style={{ display: "flex" }}>
        <Sidebar />
        
        <div className="page-container" style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/item/:itemId" element={<ItemDetails />} />
            <Route path="/about" element={<About />} />
            {/* Rota para páginas não existentes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <h1>Project Dashboard</h1>
      <List />
    </div>
  );
}

export default App;

