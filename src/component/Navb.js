import React from 'react';
import './Nav.css';
import logo from '../image/images (3).jpg';

const Navb = () => {
  return (
    <div>
      <div className="container-fluid background">
        <nav className="navbar ">
          <ul className="nav-list">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#Movies">Movies</a>
            </li>
            <li>
              <a href="#Star Ranking">Star Ranking</a>
            </li>
            <li>
              <a href="#Cinema">Cinema</a>
            </li>
          </ul>
          <div className="col">
            <div className="input-group mb-3 w-50 float-right">
              <form className="nav">
                <div className="input-group  text-center ">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Search"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="button-addon2"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>
        <div />
      </div>
    </div>
  );
};

export default Navb;
