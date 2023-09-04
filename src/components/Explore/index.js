import "./index.css";

const Explore = () => (
  <div className="container-fluid mt-5 w-100">
    <div className="row">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="comments-container">
          <div className="shadow explore-comment-container d-flex flex-row align-items-center">
            <img
              className="avatar-img"
              src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693731732/avatar_o8bziu.png"
              alt="avatar1"
            />
            <div>
              <h1 className="explore-name">Jenny Wilson</h1>
              <p className="explore-desc">
                Lorem ipsum dolor sit amet,consectetur adipiscing...
              </p>
            </div>
          </div>
          <div className="shadow explore-comment-container d-flex flex-row align-items-center">
            <img
              className="avatar-img"
              src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693734392/avatar_3_fmg2ly.png"
              alt="avatar2"
            />
            <div>
              <h1 className="explore-name">Jenny Wilson</h1>
              <p className="explore-desc">
                Lorem ipsum dolor sit amet,consectetur adipiscing...
              </p>
            </div>
          </div>
          <div className="shadow explore-comment-container d-flex flex-row align-items-center">
            <img
              className="avatar-img"
              src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693734401/avatar_2_zqacw8.png"
              alt="avatar3"
            />
            <div>
              <h1 className="explore-name">Jenny Wilson</h1>
              <p className="explore-desc">
                Lorem ipsum dolor sit amet,consectetur adipiscing...
              </p>
            </div>
          </div>
        </div>
        <div className="explore-right-container">
          <div className="explore-bubble"></div>
          <h1 className="explore-title-1">Tropical Adventure</h1>
          <h4 className="explore-title-2">for Students</h4>
          <h5 className="explore-title-3">
            Student Tropical Vacation: Relax and Recharge
          </h5>
          <ul className="explore-list-container">
            <li className="explore-list-item">Lorem ipsum dolor sit amet</li>
            <li className="explore-list-item">Massa quis natoque sit quam </li>
            <li className="explore-list-item">Eros non pellentesque elit</li>
            <li className="explore-list-item">tortor id euismod habitant </li>
            <li className="explore-list-item">
              Sed suspendisse id in ultrices
            </li>
          </ul>
          <button type="button" className="explore-btn">
            Explore More
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Explore;
