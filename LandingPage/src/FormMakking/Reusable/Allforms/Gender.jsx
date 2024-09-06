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

  // When component mounts, load the stored gender from local storage if it exists
  useEffect(() => {
    const savedGender = localStorage.getItem("gender");
    if (savedGender) {
      updateSelection("gender", savedGender);
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
      <div className="flex justify-center items-center h-screen">
        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: "697px",
            height: "429px",
            borderRadius: "30px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E4EDE7",
          }}
        >
          {/* Upper Progress Card */}
          <ProgressCard title="Gender" totalSteps={12} />

          {/* Gender Options */}
          <div className="flex flex-col mt-2 space-y-4">
            {/* Male Option */}
            <BoxComponent
              title="Male"
              imageUrl={male}
              className={`cursor-pointer ${
                selections.gender === "Male" ? "bg-green-100" : "bg-white"
              }`}
              onClick={() => handleBoxClick("Male")}
            />

            {/* Female Option */}
            <BoxComponent
              title="Female"
              imageUrl={female}
              className={`cursor-pointer ${
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
