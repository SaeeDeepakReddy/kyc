import "./index.css";

const Discounts = () => (
  <div className="discount-container">
    <div className="discount-text-container">
      <div>
        <p className="discount-text-container-paragraph">
          Get 20% off for student
        </p>
        <div className="discount-text-container-top">
          <h1 className="discount-text-container-heading1">
            Students Discount available
          </h1>
          <h4 className="discount-text-container-heading4">
            Get ready for some fun in the sun!
          </h4>
        </div>
        <div>
          <ul>
            <li className="discount-list">Lorem ipsum dolor sit amet</li>
            <li className="discount-list">Massa quis natoque sit quam</li>
            <li className="discount-list">Eros non pellentesque elit</li>
            <li className="discount-list">tortor id euismod habitant</li>
            <li className="discount-list">Sed suspendiss id in ultrices</li>
          </ul>
        </div>
        <div>
          <button className="discount-text-container-bottom-button">
            Explore More
          </button>
        </div>
      </div>
    </div>
    <div>
      <img
        alt="mask-group"
        src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693650674/Mask_group_tcthx7.png"
        className="discount-image-container"
      />
    </div>
  </div>
);

export default Discounts;
