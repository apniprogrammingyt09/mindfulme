import React, { useState } from "react";
import "./Code.css";

const App = () => {
  const [formValues, setFormValues] = useState({
    mood: 0,
    energy: 0,
    sleep_quality: 0,
    diet: 0,
    exercise: 0,
    anxiety: 0,
    stress: 0,
    sleep_hours: 0,
  });

  const [result, setResult] = useState([]); // Result state to display recommendations

  const handleEmojiSelect = (group, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [group]: value,
    }));
  };

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: parseFloat(value), // Use parseFloat to handle decimal inputs like sleep_hours
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append all the form values
    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });

    try {
      const response = await fetch("http://127.0.0.1:8000/recommend/", {
        method: "POST",
        body: formData, // Send the FormData object
      });

      const data = await response.json();
      console.log(data);
      setResult(data); // Update the result state with API response
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div id="Section">
      <form onSubmit={handleSubmit}>
        {/* Mood */}
        <div className="form-group">
          <label>Mood:</label>
          <div className="emoji-group">
            {["😞", "😕", "😐", "😊", "😁"].map((emoji, index) => (
              <button
                type="button"
                key={index}
                className={formValues.mood === index ? "selected" : ""}
                onClick={() => handleEmojiSelect("mood", index)}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Energy */}
        <div className="form-group">
          <label>Energy Level:</label>
          <div className="emoji-group">
            {["😴", "😌", "😐", "🙂", "💪"].map((emoji, index) => (
              <button
                type="button"
                key={index}
                className={formValues.energy === index ? "selected" : ""}
                onClick={() => handleEmojiSelect("energy", index)}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Sleep Quality */}
        <div className="form-group">
          <label>Sleep Quality:</label>
          <div className="emoji-group">
            {["😞", "😕", "😐", "😊", "😁"].map((emoji, index) => (
              <button
                type="button"
                key={index}
                className={formValues.sleep_quality === index ? "selected" : ""}
                onClick={() => handleEmojiSelect("sleep_quality", index)}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Diet Level */}
        <div className="form-group">
          <label>Diet Level (0 to 5):</label>
          <input
            type="range"
            name="diet"
            min="0"
            max="5"
            step="1"
            value={formValues.diet}
            onChange={handleSliderChange}
          />
          <div className="slider-value">{formValues.diet}</div>
        </div>

        {/* Exercise Duration */}
        <div className="form-group">
          <label>Exercise Duration (minutes):</label>
          <input
            type="range"
            name="exercise"
            min="0"
            max="180"
            step="1"
            value={formValues.exercise}
            onChange={handleSliderChange}
          />
          <div className="slider-value">{formValues.exercise}</div>
        </div>

        {/* Anxiety Level */}
        <div className="form-group">
          <label>Anxiety Level (0 to 7):</label>
          <input
            type="range"
            name="anxiety"
            min="0"
            max="7"
            step="1"
            value={formValues.anxiety}
            onChange={handleSliderChange}
          />
          <div className="slider-value">{formValues.anxiety}</div>
        </div>

        {/* Stress Level */}
        <div className="form-group">
          <label>Stress Level (0 to 7):</label>
          <input
            type="range"
            name="stress"
            min="0"
            max="7"
            step="1"
            value={formValues.stress}
            onChange={handleSliderChange}
          />
          <div className="slider-value">{formValues.stress}</div>
        </div>

        {/* Sleep Hours */}
        <div className="form-group">
          <label>Sleep Hours (0.0 to 12.5):</label>
          <input
            type="range"
            name="sleep_hours"
            min="0"
            max="12.5"
            step="0.5"
            value={formValues.sleep_hours}
            onChange={handleSliderChange}
          />
          <div className="slider-value">{formValues.sleep_hours}</div>
        </div>
 {/* Result Display */}
 <div className="result-display" >
        {Array.isArray(result) && result.length > 0 ? (
          result.map((item, index) => (
            <div key={index}>
              <h3>Recommended Action: {item.recommended_action}</h3>
              <p>{item.human_response}</p>
            </div>
          ))
        ) : result.recommended_action ? (
          <div>
            <h3>Recommended Action: {result.recommended_action}</h3>
            <p>{result.human_response}</p>
          </div>
        ) : (
          <p>No recommendations yet.</p>
        )}
      </div>
        <button type="submit">Get Recommendation</button>
      </form>

     
    </div>
  );
};

export default App;
