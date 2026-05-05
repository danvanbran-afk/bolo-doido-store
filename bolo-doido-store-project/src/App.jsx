import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="main-container" style={{ display: "flex", minHeight: "80vh" }}>
        <Sidebar />
        <main className="content" style={{ flex: 1, padding: "20px" }}>
          <h2>Dashboard</h2>
          <p>Welcome to the store management system!</p>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;

