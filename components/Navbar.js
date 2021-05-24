import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container-fluid">
        <Link href="/">
          <h1 className="navbar-brand fw-bold" href="#">
            News Today
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse mx-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link href="/">
                <span className="nav-link" aria-current="page">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/articles">
                <span className="nav-link" href="#">
                  Articles
                </span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/category">
                <span className="nav-link" href="#">
                  Category
                </span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/about">
                <span className="nav-link" href="#">
                  About
                </span>
              </Link>
            </li>
          </ul>
          <div className="d-flex flex-row me-5">
            <Link href="/register">
              <button className="btn mx-5 bg-transparent">Sign up</button>
            </Link>
            <Link href="/login">
              <button className="btn btn-blue me-5" type="submit">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
