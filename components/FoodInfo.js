import React from "react";
export const FoodInfo = ({
  name,
  quantity,
  size,
  calories,
  fats,
  protein,
  carbs,
  sugar,
  sodium,
  fiber,
  cholesterol,
  potassium,
  image,
}) => {
  return (
    <div>
      <div className="info">
        <h2> {name} </h2>
      </div>
      <div className="optional-info">
        <h4>Calories: {calories} Cal</h4>
        <h4>Fats: {(Math.round(fats * 100) / 100).toFixed(2)}g</h4>
        <h4>Protein: {(Math.round(protein * 100) / 100).toFixed(2)} g</h4>
        <h4>Carbs: {(Math.round(carbs * 100) / 100).toFixed(2)} g</h4>
        <h4>Fiber: {(Math.round(fiber * 100) / 100).toFixed(2)} g</h4>
        <h4>Sugar: {(Math.round(sugar * 100) / 100).toFixed(2)} g</h4>
      </div>
      <h4>Potassium: {(Math.round(potassium * 100) / 100).toFixed(2)} mg</h4>
      <h4>Sodium: {(Math.round(sodium * 100) / 100).toFixed(2)} mg</h4>
      <h4>
        Cholesterol: {(Math.round(cholesterol * 100) / 100).toFixed(2)} mg{" "}
      </h4>

      <div className="info">
        <img src={image} />
      </div>
    </div>
  );
};
