import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import BookNow from "./components/BookNow";
import Destinations from "./components/Destinations";
import Discounts from "./components/Discounts";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Explore />
      <Destinations />
      <Discounts />
      <BookNow />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
