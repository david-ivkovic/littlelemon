import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="call-to-action">
      <h1>Welcome to Little Lemon</h1>
      <p>Explore our delicious dishes and make a reservation!</p>
      {/* Linking to the booking page */}
      <Link to="/booking">
        <button>Book a Table</button>
      </Link>
    </section>
  );
}

export default CallToAction;
