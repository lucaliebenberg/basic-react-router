import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#CCC",
        height: "8vh",
        padding: "10px",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          padding: "0",
          margin: 0,
        }}
      >
        <li style={{ marginLeft: "20px" }}>
          <Link exact to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </li>
        <li style={{ marginLeft: "20px" }}>
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            About
          </Link>
        </li>
        <li style={{ marginLeft: "20px" }}>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
