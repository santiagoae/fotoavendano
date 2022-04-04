import logonav from "../assets/LPW.png";
function Nav(props) {
  return (
    <nav className="navbar navfija navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logonav} alt="logo nav" height="60px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/comuniones">
                Comuniones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bautizos">
                Bautizos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/grados">
                Grados
              </a>
            </li>
            <li className="nav-item">
              <a href="/matrimonios" className="nav-link ">
                Matrimonios
              </a>
            </li>
            <li className="nav-item">
              <a href="/publicitarias" className="nav-link ">
                Publicitarias
              </a>
            </li>
            <li className="nav-item">
              <a href="/15s" className="nav-link ">
                15's
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
