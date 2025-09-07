import { Link } from 'react-router-dom';

function Navbar() {
  return ( 
    <nav style={{backgroundColor: "#333", display: "flex", justifyContent: "center", padding: "10px"}}>
      
      <Link to="/" style={{color: "white", marginLeft: "15px"}}>Home</Link>
      <Link to="/about" style={{color: "white", marginLeft: "15px"}}>About</Link>
      <Link to="/services" style={{color: "white", marginLeft: "15px"}}>Services</Link>
      <Link to="/contact" style={{color: "white", marginLeft: "15px"}}>Contact</Link>
    </nav>
   );
}

export default Navbar;