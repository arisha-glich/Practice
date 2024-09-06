import React, { useEffect } from "react";
import ProgressCard from "../ProgressCard";
import BackgroundLayout from "../../Reusable/Backgroung";
import { useSurvey } from "../../../Provider/useSurvery";
import { useNavigate } from "react-router-dom";
import BoxComponent from "../BoxGender";
import male from "../../../assets/images/mars.png";
import female from "../../../assets/images/venus.png";

const Gender = () => {
  const { selections, updateSelection } = useSurvey();
  const navigate = useNavigate();

  // Check local storage for saved gender on component mount
  useEffect(() => {
    const savedGender = localStorage.getItem("gender");
    if (savedGender) {
      updateSelection("gender", savedGender);
    } else {
      // If no gender is saved in local storage, make sure to clear the context as well
      updateSelection("gender", ""); // Clear the gender selection in the context
    }
  }, [updateSelection]);

  const handleBoxClick = (gender) => {
    // Update the gender selection in context
    updateSelection("gender", gender);

    // Save the selected option to local storage
    localStorage.setItem("gender", gender);

    // Navigate to the next step
    navigate("/keto-diet");
  };

  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center min-h-screen px-4 py-6">
        <div
          className="flex flex-col items-center justify-center w-full max-w-md p-6 sm:p-8 rounded-lg border border-[#E4EDE7] bg-white"
        >
          {/* Upper Progress Card */}
          <ProgressCard title="Gender" totalSteps={12} />

          {/* Gender Options */}
          <div className="flex flex-col mt-4 space-y-4 w-full">
            {/* Male Option */}
            <BoxComponent
              title="Male"
              imageUrl={male}
              className={`cursor-pointer w-full sm:w-[300px] ${
                selections.gender === "Male" ? "bg-green-100" : "bg-white"
              }`}
              onClick={() => handleBoxClick("Male")}
            />

            {/* Female Option */}
            <BoxComponent
              title="Female"
              imageUrl={female}
              className={`cursor-pointer w-full sm:w-[300px] ${
                selections.gender === "Female" ? "bg-green-100" : "bg-white"
              }`}
              onClick={() => handleBoxClick("Female")}
            />
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Gender;
