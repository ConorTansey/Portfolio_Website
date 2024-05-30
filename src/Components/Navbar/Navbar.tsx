import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return ( 
        <div className="Navbar">
            <div className="Section">
                <Link className="AboutLink" to="/">About</Link>
            </div>
            <div className = "Section">
                <Link className="AboutLink" to="/Experience">Professional Experience</Link>
            </div>
            <div className = "Section">
                <Link className="AboutLink" to="/Academic">Academic Background</Link>
            </div>
            <div className = "Section">
                <Link className="AboutLink" to="/Projects">Projects</Link>
            </div>
        </div>
     );
}

export default Navbar;