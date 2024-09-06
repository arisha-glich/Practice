import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KetoDiet from "./FormMakking/Reusable/Allforms/KetoDiet";
import EatingHabits from "./FormMakking/Reusable/Allforms/EatingHabit";
import Meals from "./FormMakking/Reusable/Allforms/Meals";
import FimilarKetoDiet from "./FormMakking/Reusable/Allforms/FimilarKetoDiet";
import Gender from "./FormMakking/Reusable/Allforms/Gender";
import Whatisketo from "./FormMakking/Reusable/Allforms/Whatisketo";
import Energylevel from "./FormMakking/Reusable/Allforms/EnergyLevel";
import Mealtype from "./FormMakking/Reusable/Allforms/MealType";
import Ingredients from "./FormMakking/Reusable/Allforms/Ingredients";
import PhysicalActivity from "./FormMakking/Reusable/Allforms/PhsyicalActivity";
import Result from "./FormMakking/Reusable/Allforms/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gender />} />
        <Route path="/keto-diet" element={<KetoDiet />} />
        <Route path="/eating-habits" element={<EatingHabits />} />
        <Route path="/fimilarketodiet" element={<FimilarKetoDiet />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/whatisketo" element={<Whatisketo />} />
        <Route path="/energy-level" element={<Energylevel />} />
        <Route path="/meal-type" element={<Mealtype />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/physical-activity" element={<PhysicalActivity />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
