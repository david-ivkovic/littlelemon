import React from "react";
import "./Specials.css"; // Import the CSS file

function Specials() {
  const specials = [
    {
      id: 1,
      image: require("../Assets/greek salad.jpg"),
      name: "Greek Salad",
      price: "$12.99",
      ingredients: "Tomatoes, Cucumbers, Feta Cheese, Olives",
      Alergens: "Dairy, Nuts",
    },
    {
      id: 2,
      image: require("../Assets/lemon dessert.jpg"),
      name: "Lemon Dessert",
      price: "$15.99",
      ingredients: "Lemon, Sugar, Flour, Eggs",
      Alergens: "Gluten, Dairy",
    },
    {
      id: 3,
      image: require("../Assets/bruchetta.jpg"),
      name: "Bruchetta",
      price: "$10.99",
      ingredients: "Tomatoes, Basil, Garlic, Olive Oil",
      Alergens: "Gluten",
    },
  ];

  return (
    <section className="specials-section">
      <h2><b>Our Specials</b></h2>
      <div className="specials-container">
        {specials.map((special) => (
          <div className="special-card" key={special.id}>
            <img src={special.image} alt={special.name} className="special-image" />
            <div className="special-details">
              <h3>{special.name}</h3>
              <p className="special-price">{special.price}</p>
              <p className="special-ingredients">{special.ingredients}</p>
              {special.Alergens && (
                <p className="special-alergens"><b>*Alergens:</b> {special.Alergens}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
