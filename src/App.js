import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [mealsData, setMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((res) => setMealsData(res.data.meals))
      .catch((error) => console.error(error));
  }, [inputSearch]); // Ajoutez un tableau vide ici

  return (
    <div className="app-conatainer">
      <h1>React App Cooking</h1>
      <input
        type="text"
        placeholder="tapez le nom d'un aliment en anglais"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="meals-container">
        {mealsData &&
          mealsData
            .slice(0, 24)
            .map((meal) => <Card key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default App;
