import { create } from 'zustand';

// Utility function to load data from localStorage with error handling
const loadFromLocalStorage = (key, defaultValue) => {
  try {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : defaultValue;
  } catch (e) {
    console.error(`Error loading ${key} from localStorage:`, e);
    return defaultValue;
  }
};

// Zustand store to manage survey selections and ingredients
const useSurveyStore = create((set) => ({
  // Initialize state with data from localStorage or defaults
  selections: {
    gender: loadFromLocalStorage('gender', ''),
    age: loadFromLocalStorage('age', ''),
    energyLevel: loadFromLocalStorage('energyLevel', null),
    mealTypes: loadFromLocalStorage('mealTypes', []),
    meals: loadFromLocalStorage('meals', []),
    mealPreparationTime: loadFromLocalStorage('mealPreparationTime', []),
    // Add more fields if necessary
  },
  selectedIngredients: loadFromLocalStorage('selectedIngredients', []),

  // Method to update a selection field and persist in localStorage
  updateSelection: (field, value) => {
    set((state) => {
      const updatedSelections = {
        ...state.selections,
        [field]: value,
      };

      // Persist the updated selection in localStorage
      localStorage.setItem(field, JSON.stringify(value));

      return { selections: updatedSelections };
    });
  },

  // Method to update selected ingredients and persist in localStorage
  updateIngredients: (ingredient) => {
    set((state) => {
      const isSelected = state.selectedIngredients.includes(ingredient);
      const updatedIngredients = isSelected
        ? state.selectedIngredients.filter((item) => item !== ingredient) // Remove ingredient if already selected
        : [...state.selectedIngredients, ingredient]; // Add ingredient if not selected

      // Persist the updated ingredients in localStorage
      localStorage.setItem('selectedIngredients', JSON.stringify(updatedIngredients));

      return { selectedIngredients: updatedIngredients };
    });
  },

  // Method to clear all form data and remove from localStorage
  clearAllData: () => {
    set({
      selections: {
        gender: '',
        age: '',
        energyLevel: null,
        mealTypes: [],
        meals: [],
        mealPreparationTime: [],
        // Reset other fields if necessary
      },
      selectedIngredients: [],
    });

    // Remove all relevant items from localStorage
    localStorage.removeItem('gender');
    localStorage.removeItem('age');
    localStorage.removeItem('energyLevel');
    localStorage.removeItem('mealTypes');
    localStorage.removeItem('selectedIngredients');
    localStorage.removeItem('meals');
    localStorage.removeItem('mealPreparationTime');
  },
}));

export default useSurveyStore;
