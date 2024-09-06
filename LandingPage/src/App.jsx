import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KetoDiet from "./FormMakking/Reusable/Allforms/KetoDiet";
import EatingHabits from "./FormMakking/Reusable/Allforms/EatingHabit";
import Meals from "./FormMakking/Reusable/Allforms/Meals";
import { SurveyProvider } from "./Provider/useSurvery";
import FimilarKetoDiet from "./FormMakking/Reusable/Allforms/FimilarKetoDiet";
import Gender from "./FormMakking/Reusable/Allforms/Gender";
import Whatisketo from "./FormMakking/Reusable/Allforms/Whatisketo";
import Energylevel from "./FormMakking/Reusable/Allforms/EnergyLevel";

function App() {
  return (
    <SurveyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Gender/>} />
          <Route path="/keto-diet" element={<KetoDiet/>} />
          <Route path="/eating-habits" element={<EatingHabits />} />
          <Route path="/fimilarketodiet" element={<FimilarKetoDiet />} />
          <Route path="/meals" element={<Meals/>} />
          <Route path="/whatisketo" element={<Whatisketo/>} />
          <Route path="/energy-level" element={<Energylevel/>} />
       
        </Routes>
      </Router>
    </SurveyProvider>
  );
}

export default App;
