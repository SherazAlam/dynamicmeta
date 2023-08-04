import "./navbar.css";

import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <h1>OctaNFT</h1>
        <ul>
            <li onClick={()=>navigate("/")}>All NFTs</li>
            <li onClick={()=>navigate("/contact")}>Contact Us</li>
        </ul>
        
    </div>
  )
}

export default Navbar