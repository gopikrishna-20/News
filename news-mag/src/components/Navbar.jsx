const Navbar = ({ setcategory }) => {
    return (
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            onClick={(e) => e.preventDefault()}
          >
            <span className="badge bg-light text-dark fs-4">Newsmag</span>
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
                <div
                  className="nav-link"
                  onClick={() => setcategory("technology")}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setcategory("business")}>
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setcategory("sports")}>
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setcategory("health")}>
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setcategory("entertainment")}
                >
                  Entertainment
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  