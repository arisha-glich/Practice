import create from 'zustand';

const useStepStore = create((set) => ({
  currentStep: 1, // Start from the first step
  totalSteps: 12, // Total steps, which are 12
  incrementStep: () => set((state) => ({ 
    currentStep: Math.min(state.currentStep + 1, state.totalSteps) // Automatically increment, but not beyond totalSteps
  })),
  decrementStep: () => set((state) => ({ 
    currentStep: Math.max(state.currentStep - 1, 1) // Automatically decrement, but not below 1
  })),
  resetStep: () => set({ currentStep: 1 }), // Reset to step 1 when needed
}));

export default useStepStore;
