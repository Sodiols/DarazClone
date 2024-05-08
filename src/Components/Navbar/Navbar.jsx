import './navbar.css'
import NavBarData from '../../Data/NavBarData';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg container-fluid">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-nested" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>

                    <div className="collapse navbar-collapse container" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            {
                                NavBarData.map(data =>
                                    <li key={data.id} className="nav-item">
                                        <a className="nav-link" href="/">{data.item}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;