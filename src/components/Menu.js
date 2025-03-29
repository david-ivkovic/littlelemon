import React from 'react';
import './Menu.css'; 

function Menu() {
  const dishes = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      description: "Tomatoes, Cucumbers, Feta Cheese, Olives",
      image: require("../Assets/greek salad.jpg"),
      alergens: "Dairy, Nuts",
    },
    {
      id: 2,
      name: "Lemon Dessert",
      price: "$15.99",
      description: "Lemon, Sugar, Flour, Eggs",
      image: require("../Assets/lemon dessert.jpg"),
      alergens: "Gluten, Dairy",
    },
    {
      id: 3,
      name: "Bruchetta",
      price: "$10.99",
      description: "Tomatoes, Basil, Garlic, Olive Oil",
      image: require("../Assets/bruchetta.jpg"),
      alergens: "Gluten",
    },
    {
      id: 4,
      name: "Greek Salad",
      price: "$12.99",
      description: "Tomatoes, Cucumbers, Feta Cheese, Olives",
      image: require("../Assets/greek salad.jpg"),
      alergens: "Dairy, Nuts",
    },
    {
      id: 5,
      name: "Lemon Dessert",
      price: "$15.99",
      description: "Lemon, Sugar, Flour, Eggs",
      image: require("../Assets/lemon dessert.jpg"),
      alergens: "Gluten, Dairy",
    },
    {
      id: 6,
      name: "Bruchetta",
      price: "$10.99",
      description: "Tomatoes, Basil, Garlic, Olive Oil",
      image: require("../Assets/bruchetta.jpg"),
      alergens: "Gluten",
    },
    {
      id: 7,
      name: "Greek Salad",
      price: "$12.99",
      description: "Tomatoes, Cucumbers, Feta Cheese, Olives",
      image: require("../Assets/greek salad.jpg"),
      alergens: "Dairy, Nuts",
    },
    {
      id: 8,
      name: "Lemon Dessert",
      price: "$15.99",
      description: "Lemon, Sugar, Flour, Eggs",
      image: require("../Assets/lemon dessert.jpg"),
      alergens: "Gluten, Dairy",
    },
    {
      id: 9,
      name: "Bruchetta",
      price: "$10.99",
      description: "Tomatoes, Basil, Garlic, Olive Oil",
      image: require("../Assets/bruchetta.jpg"),
      alergens: "Gluten",
    }
  ];

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <p>Explore our variety of Mediterranean dishes.</p>
      <div className="menu-items">
        {dishes.map(dish => (
          <div className="menu-item" key={dish.id}>
            <img src={dish.image} alt={dish.name} className="menu-item-image" />
            <div className="menu-item-info">
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p className="menu-item-price">{dish.price}</p>
            </div>
            {dish.alergens && (
              <p className="menu-item-alergens"><b>*Alergens:</b> {dish.alergens}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
