import React from 'react'

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{
        height: "65px",
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand "
          style={{
            fontSize: "25px",
          }}
          href="/"
        >
          Textizer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active mx-2"
                aria-current="page"
                style={{
                  fontSize: "18px",
                }}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active mx-2"
                aria-current="page"
                style={{
                  fontSize: "18px",
                }}
                href="/about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active mx-2"
                aria-current="page"
                href="/contact"
                style={{
                  fontSize: "18px",
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar