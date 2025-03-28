import { Link } from 'react-router-dom';
import restaurantImage from '../Assets/restaurant.jpg'; // Import the image

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="cta-text">
        <h1>Welcome to Little Lemon</h1>
        <p>Explore our delicious dishes and make a reservation!</p>
        {/* Linking to the booking page */}
        <Link to="/booking">
          <button>Book a Table</button>
        </Link>
      </div>
      <div className="cta-image">
        <img src={restaurantImage} alt="Delicious dishes" />
      </div>
    </section>
  );
}

export default CallToAction;
