import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return ( 
        <div className="Navbar">
            <div className="Navbar_Contents">
                <div className="Section">
                    <Link className="AboutLink" to="/Portfolio_Website">About</Link>
                </div>
                <div className = "Section">
                    <Link className="AboutLink" to="/Portfolio_Website/Experience">Professional_Experience</Link>
                </div>
                <div className = "Section">
                    <Link className="AboutLink" to="/Portfolio_Website/Academic">Academic_Background</Link>
                </div>
                <div className = "Section">
                    <Link className="AboutLink" to="/Portfolio_Website/Projects">Projects</Link>
                </div>
            </div>
        </div>
     );
}

export default Navbar;