import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./movie-form.css";

function MovieForm(props) {
  const { message, isSaving } = props;

  const [breed, setBreed] = useState("");
  const [origen, setOrigen] = useState("");
  const [weight, setWeight] = useState("");
  const [rating, setRating] = useState(3);
  const [errorMessage, setErrorMessage] = useState("");

  const onBreedChange = (event) => {
    setBreed(event.target.value);
  };

  const onOrigenChange = (event) => {
    setOrigen(event.target.value);
  };

  const onWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  
  const onMovieSumbit = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="movie-form" onSubmit={onMovieSumbit}>
      <h2 className="movie-form__title">Dog Breed</h2>
      {message && <p className="movie-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="movie-form__controls" disabled={isSaving}>
        <label className="movie-form__label">Dog Breed:</label>
        <input className="movie-form__input" type="text" value={breed} onChange={onBreedChange} />
        <label className="movie-form__label">Origen of Breed:</label>
        <input className="movie-form__input" type="text" value={origen} onChange={onOrigenChange} />
        <label className="movie-form__label">Weight in pounds:</label>
        <input
          className="movie-form__input"
          type="number"
          value={weight}
          onChange={onWeightChange}
        />
        <label className="movie-form__label">Cuteness Rating:</label>
        <input
          className="movie-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />
        
        <input
          className="movie-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default MovieForm;
