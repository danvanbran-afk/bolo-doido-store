import "./App.css";
import List from "./components/List.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Project Dashboard</h1>
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

