import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import { FoodInfo } from "./components/FoodInfo";
import { AddFood } from "./components/AddFood";
import { Pie } from "react-chartjs-2";
import "./App.css";

function App() {
  // const APP_ID = "446a9885";
  // const APP_KEY = "0dad177908f4f874a764a0c3a4f99503";

  // API Credentials
  const APP_ID = "fbba09fb";
  const APP_KEY = "9b99ea68a5e062b86a95d2e7533c06e7";

  // Data from the API call
  const [dataGot, setDataGot] = useState({});

  // Query for the search
  const [query, setQuery] = useState({
    number: 1,
    size: "small",
    name: "apple",
  });

  
  useEffect(() => {
    const getData = async () => {


      // Connecting to the API
      try {
        const apiEndpoint = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
        const params = { query: `${query.number} ${query.size} ${query.name}` };
        const {
          data: { foods },
        } = await axios.post(apiEndpoint, params, {
          headers: {
            "x-app-id": APP_ID,
            "x-app-key": APP_KEY,
          },
        });
        
        // Storing the data received from the API
        setDataGot({
          name: foods[0].food_name,
          quantity: foods[0].serving_qty,
          size: foods[0].serving_unit,
          photo: foods[0].photo.thumb,
          calories: foods[0].nf_calories,
          protein: foods[0].nf_protein,
          fats: foods[0].nf_total_fat,
          carbs: foods[0].nf_total_carbohydrate,
          cholesterol: foods[0].nf_total_carbohydrate,
          fiber: foods[0].nf_dietary_fiber,
          potassium: foods[0].nf_potassium,
          sodium: foods[0].nf_sodium,
          sugar: foods[0].nf_sugars,
        });

        console.log(foods[0]);
      } catch (err) {
        alert("I'm sorry we couldn't find that one!");
      }
    };

    getData();
    // eslint-disable-next-line
  }, [query]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Pie
          data={{
            labels: [
              "Calories",
              "Fats",
              "Protein",
              "Sugar",
              "Cholesterol",
              "Fiber",
              "Potassium",
              "Sodium",
              "Carbs",
            ],
            datasets: [
              {
                data: [
                  dataGot.calories,
                  dataGot.fats,
                  dataGot.protein,
                  dataGot.sugar,
                  dataGot.cholesterol,
                  dataGot.fiber,
                  dataGot.potassium,
                  dataGot.sodium,
                  dataGot.carbs,
                ],
                backgroundColor: [
                  "red",
                  "blue",
                  "yellow",
                  "green",
                  "teal",
                  "blue",
                  "pink",
                  "violet",
                  "gray",
                ],
              },
            ],
          }}
          options={{ responsive: true, maintainAspectRatio: true }}
          width={100}
          height={100}
          legend={{legend: true}}
        />
        <FoodInfo
          key={dataGot.name}
          name={dataGot.name}
          calories={dataGot.calories}
          fats={dataGot.fats}
          protein={dataGot.fats}
          carbs={dataGot.carbs}
          sugar={dataGot.sugar}
          cholesterol={dataGot.cholesterol}
          fiber={dataGot.fiber}
          potassium={dataGot.potassium}
          sodium={dataGot.sodium}
          image={dataGot.photo}
        />

        <AddFood queryProp={setQuery} />
      </div>
    </div>
  );
}

export default App;
