import { Link } from 'react-router-dom';

function Navbar() {
  return ( 
    <nav style={{background: "#333", padding: "10px"}}>
      <h1 style={{color: "white", marginLeft: "15px"}}>My Company</h1>
      <Link to="/" style={{color: "white", marginLeft: "15px"}}>Home</Link>
      <Link to="/about" style={{color: "white", marginLeft: "15px"}}>About</Link>
      <Link to="/services" style={{color: "white", marginLeft: "15px"}}>Services</Link>
      <Link to="/contact" style={{color: "white", marginLeft: "15px"}}>Contact</Link>
    </nav>
   );
}

export default Navbar;