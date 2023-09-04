import { BsThreeDots, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./index.css";

const Destinations = () => (
  <div>
    <h1 className="ml-3">Our Destinations</h1>
    <div className="d-flex flex-row flex-wrap">
      <div className="university-card-container shadow m-3">
        <img
          className="university-img"
          src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693650676/card-image_norq2f.png"
          alt="harward"
        />
        <h4 className="university-name">Harvard University</h4>
        <div className="university-address-container">
          <p className="university-address">Cambridge,massachusetts,UK</p>
          <div className="three-dots-container">
            <BsThreeDots />
          </div>
        </div>
      </div>
      <div className="university-card-container shadow m-3">
        <img
          className="university-img"
          src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693650664/card-image-1_jhmh9s.png"
          alt="harward"
        />
        <h4 className="university-name">Oxford University</h4>
        <div className="university-address-container">
          <p className="university-address">Oxford, England</p>
          <div className="three-dots-container">
            <BsThreeDots />
          </div>
        </div>
      </div>
      <div className="university-card-container shadow m-3">
        <img
          className="university-img"
          src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693650682/card-image-2_fusohy.png"
          alt="harward"
        />
        <h4 className="university-name">Standford University</h4>
        <div className="university-address-container">
          <p className="university-address">standford,California</p>
          <div className="three-dots-container">
            <BsThreeDots />
          </div>
        </div>
      </div>
      <div className="university-card-container shadow m-3">
        <img
          className="university-img"
          src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693650673/card-image-3_hxx2jv.png"
          alt="harward"
        />
        <h4 className="university-name">Nanyang Technological University</h4>
        <div className="university-address-container">
          <p className="university-address">Nanyang Ave, Singapura</p>
          <div className="three-dots-container">
            <BsThreeDots />
          </div>
        </div>
      </div>
    </div>
    <div className="navigators">
      <BsArrowLeft className="left-arrow" />
      <p>
        <span className="navigator-no">2</span>/148
      </p>
      <BsArrowRight className="right-arrow" />
    </div>
  </div>
);

export default Destinations;
