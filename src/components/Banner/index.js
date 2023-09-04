import "./index.css";

const Banner = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="p-5 banner-grid-container">
        <div className="banner-left-container">
          <h5 className="banner-sub-title">Discover the beauty of tropics</h5>
          <h1 className="banner-title">
            Tropical <br /> Destinations
          </h1>
          <h4 className="banner-title-2">For Students</h4>
          <p className="banner-desc">
            Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
            integer rutrum nisi. A nec nisl vitae{" "}
          </p>
          <button type="button" className="sign-up-btn">
            Sign Up
          </button>
        </div>
        <div>
          <img
            className="banner-img"
            src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693650648/Group_171_jq7bfd.png"
            alt="group171"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
