import './FooterStyle.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <footer>
        <h2 >SUBSCRIBE NOW</h2>
        <h2  >GET OUR UPDATES ALWAYS FAST</h2>
        <h3 >YOUR PERSONAL DATA WILL ALWAYS BE SAFE</h3>
        <input type="email" placeholder="enter your email id" class="input"/>
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Some help for you
        </button>
        <ul className="dropdown-menu end">
            <li><Link className="dropdown-item" to="#">SEARCH</Link></li>
            <li><Link className="dropdown-item" to="#">HELP</Link></li>
            <li><Link className="dropdown-item" to="#">INFORMATION </Link></li>
            <li><Link className="dropdown-item" to="#">PRIVCAY POLICE</Link></li>
            <li><Link className="dropdown-item" to="#">SHIPPING DETALIS</Link></li>
        </ul>
        </div>
    </footer>
    <div className="last"><p>© 2023, Phono (password: buddha) Design Themes</p>
        <button id="accept">ACCEPT</button>
        <button id="REJECTED">REJECTED</button>
        <i className="fa-solid fa-plane-circle-xmark" ></i>
        <i className="fa-brands fa-screenpal" ></i>
    </div>
    </div>
  )
}

export default Footer