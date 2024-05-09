import './stylesheets/topnav.css';
import { Link } from 'react-router-dom'; 

const Topnav = () => {
    return (

        <div className = "top">
            <p className = "ir">INDIAN RAILWAYS</p>
            <div className = "ls">
                <Link to="/ticket" className="bs">Ticket</Link>
                <Link to="/history" className="bs">History</Link>
                <Link to="/" className="bs">Map</Link>
                <Link to="/account" className="bs">Profile</Link>
            </div>
        </div>
    )
}

export default Topnav