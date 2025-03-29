import React from "react";
import "./CustomersSay.css";

function CustomersSay() {
  const reviews = [
    {
      id: 1,
      name: "John W.",
      image: require("../Assets/bruchetta.jpg"),
      review: "“Little Lemon is the best! We had a wonderful time!”",
    },
    {
      id: 2,
      name: "Jane S.",
      image: require("../Assets/bruchetta.jpg"),
      review: "“The food was fantastic and the atmosphere was so cozy!”",
    },
    {
      id: 3,
      name: "Sam W.",
      image: require("../Assets/bruchetta.jpg"),
      review: "“A great experience! Will definitely visit again.”",
    },
    {
      id: 4,
      name: "Emily D.",
      image: require("../Assets/bruchetta.jpg"),
      review: "“Excellent service and the food was out of this world!”",
    },
  ];

  return (
    <section className="reviews-section">
      <h2>What Our Customers Say</h2>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <img
              src={review.image}
              alt={review.name}
              className="review-image"
            />
            <h3>{review.name}</h3>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
