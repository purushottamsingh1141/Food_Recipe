import React, { useEffect, useState } from "react";
import "./styless.css";
import { FaSearch } from "react-icons/fa";

const Menu = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("indian");
  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const result = await api.json();
      setMealData(result.meals);
      console.log(result);
    };
    fetchData();
  }, [area]);

  return (
    <div>
      <div className="back">
        <h1>Food Recipe</h1>
        <div className="button-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setArea("Indian")}
          >
            Indian
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setArea("Canadian")}
          >
            Canadian
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => setArea("Irish")}
          >
            Irish
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setArea("British")}
          >
            British
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => setArea("Filipino")}
          >
            Filipino
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => setArea("Malaysian")}
          >
            Malaysian
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => setArea("Egyptian")}
          >
            Egyptian
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setArea("Greek")}
          >
            Greek
          </button>

          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input
              className="search-box"
              type="text"
              placeholder="Search meals..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div
        className="dik"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap", //
        }}
      >
        {mealData
          .filter((result) =>
            result.strMeal.toLowerCase().includes(SearchTerm.toLowerCase())
          )
          .map((result) => (
            <div className="disk" key={result.idMeal}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={result.strMealThumb}
                  alt={result.strMeal}
                />
                <div className="card-body">
                  <h5 className="card-title">{result.strMeal}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
