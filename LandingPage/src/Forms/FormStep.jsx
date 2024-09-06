import React, { useContext } from "react";
import { FormContext } from "../Hooks/FormContext";
import OptionCard from "./OptionCard";
import backbutton from "../assets/images/next.png"; // Ensure correct path

const FormStep = React.memo(
  ({
    title,
    description,
    options = [],
    inputs = [],
    content,
    onNext,
    onBack,
    showBack,
  }) => {
    const { formData, setFormData } = useContext(FormContext);

    const handleOptionSelect = (value) => {
      const updatedFormData = { ...formData, [title]: value };
      setFormData(updatedFormData);
      onNext();
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    return (
      <div className="w-full ">
        {showBack && (
          <button
            className="absolute top-4 left-4 p-2 bg-gray-100 rounded-full"
            onClick={onBack}
          >
            <img src={backbutton} alt="Back" className="w-6 h-6" />
          </button>
        )}

        <h2
          className="text-2xl font-bold"
          style={{
            fontFamily: "Ubuntu",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "30px",
            textAlign: "center",
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            className="mt-2 text-lg"
            style={{
              fontFamily: "Ubuntu",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "left",
            }}
          >
            {description}
          </p>
        )}

        {content && <div className="mt-4">{content}</div>}

        {options.length > 0 && (
          <div className="mt-10">
            {options.map((option) => (
              <OptionCard
                key={option.value}
                label={option.label}
                isSelected={formData[title] === option.value}
                onClick={() => handleOptionSelect(option.value)}
                style={{
                  fontFamily: "Ubuntu",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "13.79px",
                }}
                className="mb-4" // Add margin-bottom to create space
              />
            ))}
          </div>
        )}

        {inputs.length > 0 && (
          <div className="mt-4">
            {inputs.map((input) => (
              <div key={input.name} className="mb-4">
                <label className="block font-semibold mb-2">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  name={input.name}
                  value={formData[input.name] || ""}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
              </div>
            ))}
          </div>
        )}

        {(title === "What is Keto Diet?" ||
          title === "Weight" ||
          title === "Age & Height") && (
          <div className="mt-8 flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={onNext}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  }
);

export default FormStep;
