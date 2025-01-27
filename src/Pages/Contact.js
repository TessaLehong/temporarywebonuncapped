import React, { useState } from "react";
import screenshotImage from "../assets/images/Screenshot 2024-11-07 002014.png";
import "./Contact.css";

const Contact = () => {
  const questions = [
    {
      type: "select",
      question: "Select your inquiry type",
      options: ["General Inquiry", "Sales", "Other"],
    },
    { type: "text", question: "What is your name?", placeholder: "Enter your full name" },
    { type: "tel", question: "What is your number?", placeholder: "Enter your phone number" },
    { type: "textarea", question: "What is your message?", placeholder: "Write your detailed message here..." },
  ];

  const steps = ["step1", "step2", "step3", "step4"];
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswerSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let inputAnswers = {};

    for (const [key, value] of formData.entries()) {
      inputAnswers[key] = value;
    }

    const allAnswered = Object.values(inputAnswers).every((answer) => answer.trim() !== "");
    if (!allAnswered) {
      alert("Please provide an answer for all questions.");
      return;
    }

    const newAnswers = { ...answers, ...inputAnswers };
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      e.target.reset();
    } else {
      // Submit the form to Formspree
      fetch("https://formspree.io/f/mvgzoqej", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAnswers),
      })
        .then((response) => {
          if (response.ok) {
            alert("Thank you for completing the form! Your response has been sent.");
            setAnswers({});
            setCurrentStep(0);
            e.target.reset();
          } else {
            alert("There was an issue submitting your form. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred while sending your message. Please try again.");
        });
    }
  };

  return (
    <div className="contact-page">
      <img src={screenshotImage} alt="Contact Us" className="form-image" />

      <form className="form-content" onSubmit={handleAnswerSubmit}>
        <div className="form-step">
          <h2>{questions[currentStep].question}</h2>
          {questions[currentStep].type === "select" ? (
            <select name={`answer-${currentStep}`} aria-label={questions[currentStep].question} required>
              <option value="" disabled>Select an option</option>
              {questions[currentStep].options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : questions[currentStep].type === "textarea" ? (
            <textarea
              name={`answer-${currentStep}`}
              placeholder={questions[currentStep].placeholder}
              aria-label={questions[currentStep].question}
              rows="5"
              required
            ></textarea>
          ) : (
            <input
              type={questions[currentStep].type}
              name={`answer-${currentStep}`}
              placeholder={questions[currentStep].placeholder}
              aria-label={questions[currentStep].question}
              required
            />
          )}
        </div>

        <button type="submit">
          {currentStep < steps.length - 1 ? "Next" : "Submit"}
        </button>

        <p>
          Step {currentStep + 1} of {steps.length}
        </p>
      </form>
    </div>
  );
};

export default Contact;
