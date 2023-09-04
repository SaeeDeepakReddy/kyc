import "./index.css";

const BookNow = () => (
  <div className="book-now-container">
    <div className="book-now-image-container">
      <img
        alt="group167"
        src="https://res.cloudinary.com/dx3vswge0/image/upload/v1693650642/Group_167_bgynbm.png"
        class="image"
      />
    </div>
    <div className="book-now-bubble"></div>
    <div className="book-now-container-2 shadow">
      <form>
        <div>
          <h1 className="book-now-heading">Book Now</h1>
          <p className="book-now-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="book-now-container-middle">
          <label className="book-now-label" htmlFor="city">
            CITY
          </label>
          <br />
          <input type="text" id="city" placeholder="placeholder" />
          <div className="d-flex flex-row justify-content-between">
            <div>
              <label className="book-now-label" htmlFor="arrival">
                ARRIVAL
              </label>
              <br />
              <input type="date" id="arrival" placeholder="11 OCTOBER" />
            </div>
            <div>
              <label className="book-now-label" htmlFor="departure">
                DEPARTURE
              </label>
              <br />
              <input type="date" id="departure" placeholder="11 DECEMBER" />
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <div>
              <label className="book-now-label" htmlFor="star">
                STAR
              </label>
              <br />
              <div className="d-flex flex-row">
                <button type="button" className="decrease-button">
                  -
                </button>
                <input
                  type="text"
                  id="star"
                  placeholder="4"
                  className="text-center"
                />
                <button className="increase-button">+</button>
              </div>
            </div>
            <div>
              <div>
                <label className="book-now-label" for="star">
                  ROOM
                </label>
                <br />
                <div className="d-flex flex-row">
                  <button type="button" className="decrease-button">
                    -
                  </button>
                  <input
                    type="text"
                    id="room"
                    placeholder="1"
                    className="text-center"
                  />
                  <button className="increase-button">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-now-container-bottom">
          <button className="book-now-button">BOOK NOW</button>
        </div>
      </form>
    </div>
  </div>
);

export default BookNow;
