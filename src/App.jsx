import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ItemDetails from "./pages/ItemDetails.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./App.css";

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
