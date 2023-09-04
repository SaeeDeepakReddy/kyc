import { Component } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import "./index.css";

class Navbar extends Component {
  state = {
    isNavActive: true,
  };

  onClickNav = () => {
    this.setState((prevState) => ({ isNavActive: !prevState.isNavActive }));
  };

  render() {
    const { isNavActive } = this.state;
    const barsIcon = isNavActive ? "features-container" : "";
    return (
      <div className="top-section nav-grid">
        <div>
          <nav className="navbar-left">
            <button
              type="button"
              onClick={this.onClickNav}
              className="bar-icon"
            >
              <RxHamburgerMenu />
            </button>
          </nav>
          <div className={`${barsIcon}`}>
            <p className="feature">Home</p>
            <p className="feature">About</p>
            <p className="feature">Schedules</p>
            <p className="feature">Membership</p>
            <p className="feature">Pricing</p>
          </div>
        </div>
        <div className="navbar-right">
          <p className="feature feature-offer">Offers</p>
          <button type="button" className="courses-btn">
            courses
          </button>
        </div>
      </div>
    );
  }
}
export default Navbar;
