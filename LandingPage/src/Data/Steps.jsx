import { FiUser, FiTarget, FiBookOpen, FiClock, FiActivity, FiAlertCircle, FiSmile, FiList } from 'react-icons/fi';
import { FaWeight, FaBirthdayCake, FaMedal } from 'react-icons/fa';

import male from '../assets/images/mars.png';
import female from '../assets/images/venus.png';

const steps = [
  {
    title: "Gender",
    icon: <FiUser />,
    options: [
      { label: "Male", value: "male", icon: male },
      { label: "Female", value: "female", icon: female },
    ],
  },
  {
    title: "Keto Diet Goal",
    description: "What is your goal with the Keto diet?",
    icon: <FiTarget />,
    options: [
      { label: "Lose weight", value: "lose_weight" },
      { label: "Gain muscle", value: "gain_muscle" },
      { label: "Maintain weight", value: "maintain_weight" },
      { label: "Reverse diet", value: "reverse_diet" },
      { label: "I don’t know", value: "dont_know" },
    ],
  },
  {
    title: "Keto Diet Familiarity",
    description: "How familiar are you with the Keto diet?",
    icon: <FiBookOpen />,
    options: [
      { label: "Expert", value: "expert" },
      { label: "I've heard a thing or two", value: "familiar" },
      { label: "Beginner", value: "beginner" },
    ],
  },
  {
    title: "What is Keto Diet?",
    description: "Introduction to the Keto diet",
    icon: <FiBookOpen />,
    options: [],
    content: `
      The ketogenic diet, also known as the keto diet, is a high-fat, low-carbohydrate diet that has been shown to promote weight loss and improve various health conditions...
    `,
  },
  {
    title: "Meal Preparation",
    description: "How much time do you have for meal preparation each day?",
    icon: <FiClock />,
    options: [
      { label: "30 minutes", value: "30_minutes" },
      { label: "1 hour", value: "1_hour" },
      { label: "1.5 hours", value: "1.5_hours" },
      { label: "2 hours", value: "2_hours" },
    ],
  },
  {
    title: "Workout Frequency",
    description: "How often do you plan to work out?",
    icon: <FiActivity />,
    options: [
      { label: "Daily", value: "daily" },
      { label: "3-5 times a week", value: "3_5_times" },
      { label: "1-2 times a week", value: "1_2_times" },
      { label: "Not sure yet", value: "not_sure" },
    ],
  },
  {
    title: "Dietary Restrictions",
    description: "Do you have any dietary restrictions?",
    icon: <FiAlertCircle />,
    options: [
      { label: "None", value: "none" },
      { label: "Vegetarian", value: "vegetarian" },
      { label: "Vegan", value: "vegan" },
      { label: "Gluten-Free", value: "gluten_free" },
      { label: "Other", value: "other" },
    ],
  },
  {
    title: "Energy Level",
    description: "How is your energy level throughout the day?",
    icon: <FiSmile />,
    options: [
      { label: "Insanely low", value: "insanely_low" },
      { label: "Low", value: "low" },
      { label: "Average", value: "average" },
      { label: "Above average", value: "above_average" },
      { label: "High", value: "high" },
      { label: "Super high", value: "super_high" },
    ],
  },
  {
    title: "Meat Type",
    description: "Which meats you DON'T like?",
  
    options: [
      { label: "Poultry", value: "poultry" },
      { label: "Pork", value: "pork" },
      { label: "Beef", value: "beef" },
      { label: "Fish", value: "fish" },
      { label: "Lamb", value: "lamb" },
      { label: "Veal", value: "veal" },
      { label: "I am vegetarian", value: "vegetarian" },
    ],
  },
  {
    title: "Ingredients",
    description: "Which ingredients you DON'T like?",
    icon: <FiList />,
    options: [
      { label: "Onion", value: "onion" },
      { label: "Mushrooms", value: "mushrooms" },
      { label: "Eggs", value: "eggs" },
      { label: "Milk", value: "milk" },
      { label: "Cheese", value: "cheese" },
      { label: "Butter", value: "butter" },
      { label: "Avocado", value: "avocado" },
      { label: "Seafood", value: "seafood" },
      { label: "Olives", value: "olives" },
      { label: "Capers", value: "capers" },
      { label: "Coconut", value: "coconut" },
      { label: "Goat cheese", value: "goat_cheese" },
      { label: "I eat them all", value: "eat_all" },
    ],
  },
  {
    title: "Weight",
    description: "Enter your current and target weight",
    icon: <FaWeight />,
    inputs: [
      { label: "Current Weight", name: "current_weight", type: "number", unit: "kg" },
      { label: "Target Weight", name: "target_weight", type: "number", unit: "kg" },
    ],
  },
  {
    title: "Age & Height",
    description: "Enter your age and height",
    icon: <FaBirthdayCake />,
    inputs: [
      { label: "Age", name: "age", type: "number", unit: "yrs" },
      { label: "Height", name: "height", type: "number", unit: "cm" },
    ],
  },
  {
    title: "Congratulations",
    description: "Evaluating your result",
    icon: <FaMedal />,
  },
];

export default steps;
