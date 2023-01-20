import { useState, ReactElement } from "react";

const useMultiForm = (formSteps: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBackwards = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const goForwards = () => {
    if (currentIndex === formSteps - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };

  // go to section
  const goToSection = (item: number) => {
    setCurrentIndex(item);
  };

  return {
    currentIndex,
    goForwards,
    goBackwards,
    goToSection,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === formSteps - 1,
  };
};

export default useMultiForm;
