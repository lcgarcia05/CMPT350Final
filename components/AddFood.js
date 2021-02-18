import React, { useState } from "react";

export const AddFood = ({ queryProp, typeProp, foodProp }) => {
  // Store the data from the user inputs
  const [data, setData] = useState({
    type: "breakfast",
    name: "",
    quantity: 1,
    size: "small",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    queryProp({
      number: data.quantity,
      size: data.size,
      name: data.name,
    });

    // Set data for the query
    setData({
      type: "breakfast",
      name: "",
      quantity: 1,
      size: "small",
    });
  };

  return (
    <div className="add-food">
      <h3> Search a food! </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="food-name"> You can also add the quantity and serving unit! (i.e. 1 large apple, 1 cup rice) </label>
          <input
            type="text"
            value={data.name}
            placeholder="Enter a food name..."
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <button className="btn"> Submit </button>
      </form>
    </div>
  );
};
