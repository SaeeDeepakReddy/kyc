import "./index.css";

const Testimonials = () => (
  <div className="testimonials-heading-container">
    <h1 className="testimonials-heading">Testimonials</h1>
    <div className="testimonials-container">
      <div className="each-testimonial-container">
        <div className="each-testimonial-image-container">
          <img
            src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693744605/Frame_6_ntze3n.png"
            className="each-testimonial-image"
            alt="Frame_6_ntze3n"
          />
        </div>
        <h1 className="each-testimonials-name">Corey Korsgaard</h1>
        <hr className="testimonial-horizontal-line" />
        <div className="each-testimonial-image-description">
          <p className="each-testimonial-description-paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className="each-testimonial-container">
        <div className="each-testimonial-image-container">
          <img
            src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693744657/Avatar_2_mbgnzd.png"
            className="each-testimonial-image"
            alt="Avatar_2_mbgnzd"
          />
        </div>
        <h1 className="each-testimonials-name">Jakob Aminoff</h1>
        <hr className="testimonial-horizontal-line" />
        <div className="each-testimonial-image-description">
          <p class="each-testimonial-description-paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className="each-testimonial-container">
        <div className="each-testimonial-image-container">
          <img
            src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693744605/Avatar_1_kcdjhk.png"
            className="each-testimonial-image"
            alt="Avatar_1_kcdjhk"
          />
        </div>
        <h1 className="each-testimonials-name">Carla Press</h1>
        <hr className="testimonial-horizontal-line" />
        <div className="each-testimonial-image-description">
          <p className="each-testimonial-description-paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
