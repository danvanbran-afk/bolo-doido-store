function Footer() {
  return (
    <footer className="footer" style={{
      backgroundColor: "#4a3429",
      color: "#fffcfb",
      textAlign: "center",
      padding: "20px",
      fontSize: "14px",
      marginTop: "auto",
      borderTop: "4px solid #ff7b54"
    }}>
      <p>&copy; {new Date().getFullYear()} Bolo Doido Store - All rights reserved.</p>
    </footer>
  );
}

export default Footer;
