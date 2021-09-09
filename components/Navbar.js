import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";
import { verifyUser, userLogout } from "../lib/fetchUsers";
import useSWR from "swr";
import { useUser } from "../pages/api/users";

const Navbar = (props) => {
  const [key, setKey] = useState(null);
  const data = useSWR(props.url??'api/verify', verifyUser);
  const id_user = data?.data?.id_user;
  const { user, mutateUser, errUser } = useUser(id_user);

  useEffect(() => {
    switch (props.state) {
      case "home":
        document.getElementById("home").classList.add("active");
        break;
      case "articles":
        document.getElementById("articles").classList.add("active");
        break;
      case "category":
        document.getElementById("category").classList.add("active");
        break;
      case "about":
        document.getElementById("about").classList.add("active");
        break;
      default:
        break;
    }
  }, [props]);

  const handleSubmit = (e) => {
    e.preventDefault()
    Router.push({
      pathname: '/articles',
      query: { key: key},
    })
    /* router.push(`/articles/${key}`); */
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container-fluid">
        <Link href="/" className="cursor-pointer">
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
            <li className="nav-item mx-3 cursor-pointer">
              <Link href="/">
                <span className="nav-link" aria-current="page" id="home">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item mx-3 cursor-pointer">
              <Link href="/articles">
                <span className="nav-link" href="#" id="articles">
                  Articles
                </span>
              </Link>
            </li>
            <li className="nav-item mx-3 cursor-pointer">
              <Link href="/category">
                <span className="nav-link" href="#" id="category">
                  Category
                </span>
              </Link>
            </li>
            <li className="nav-item mx-3 cursor-pointer">
              <Link href="/about">
                <span className="nav-link" href="#" id="about">
                  About
                </span>
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setKey(e.target.value)}
            />
          </form>
          {data.data === null || data.data === undefined ? (
            <div className="d-flex flex-row">
              <Link href="/register">
                <button className="btn mx-5 bg-transparent cursor-pointer">
                  Sign up
                </button>
              </Link>
              <Link href="/login">
                <button className="btn btn-blue cursor-pointer" type="submit">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <div className="d-flex flex-row">
              <div className="dropdown">
                <img
                  src="./icon/Bell.svg"
                  className="icon-1 ms-2 mt-3 cursor-pointer dropdown-toggle"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul
                  className="dropdown-menu dropdown-menu-end shadow-lg border-radius px-1"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <div class="d-flex flex-row bd-highlight mb-3">
                      <div class="p-2 bd-highlight">Flex item 1</div>
                      <div class="p-2 bd-highlight">Flex item 2</div>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-center text-info cursor-pointer">
                      See More
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown mx-3">
                <div
                  className="border border-2 rounded-circle p-1 ms-2"
                  id="profile"
                >
                  <img
                    src={`${
                      user?.data?.avatar
                        ? `${process.env.API_URL_IMG}${user?.data?.avatar}`
                        : "./images/no-photo.png"
                    }`}
                    className="photo dropdown-toggle rounded-circle"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                  <ul
                    className="dropdown-menu dropdown-menu-end shadow-lg border-radius px-1"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <Link href="/profile">
                      <li>
                        <a
                          className="dropdown-item cursor-pointer"
                          id="sub-profile"
                        >
                          My Profile
                        </a>
                      </li>
                    </Link>
                    <li>
                      <a className="dropdown-item cursor-pointer">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-danger cursor-pointer"
                        onClick={() => userLogout(Router)}
                      >
                        LogOut
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
