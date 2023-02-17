import { FormEvent, MouseEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.css";
import useMultiForm from "./hooks/useMultiForm";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";
import Confirmation from "./components/Confirmation";
import Button from "./components/Button";

export const planOptions = {
  Arcade: {
    monthly: 9,
    yearly: 90,
  },
  Advanced: {
    monthly: 12,
    yearly: 120,
  },
  Pro: {
    monthly: 15,
    yearly: 150,
  },
  onlineServices: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    monthly: 2,
    yearly: 20,
  },
};

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro";
  planLength: boolean;
  isLargerStorage: boolean;
  isCustomizableProfile: boolean;
  isOnlineService: boolean;
};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  planLength: false,
  isLargerStorage: false,
  isCustomizableProfile: false,
  isOnlineService: false,
};

const sideBar = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

function App() {
  const [formData, setFormData] = useState(initialValues);

  const updateForm = (fieldToUpdate: Partial<FormItems>) =>
    setFormData((prev) => ({ ...formData, ...fieldToUpdate }));

  const {
    currentIndex,
    goBackwards,
    goForwards,
    isFirstStep,
    isLastStep,
    goToSection,
    isConfirmation,
  } = useMultiForm(sideBar.length + 1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // if (isLastStep) return alert("congrats something");
    goForwards();
  };

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}>
        {sideBar.map((item, index) => (
          <div key={item} className={styles.section}>
            <div
              className={`${styles.num} ${
                currentIndex === index ? styles.active : ""
              }`}
            >
              {index + 1}
            </div>
            <div className={styles.info}>
              <p className={styles.stepNum}>Step {index + 1}</p>
              <p className={styles.step}>{item}</p>
            </div>
          </div>
        ))}
      </aside>
      <form className={styles.form} onSubmit={handleSubmit}>
        {currentIndex === 0 && (
          <PersonalInfo {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 1 && (
          <SelectPlan {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 2 && (
          <PickAddOns {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 3 && (
          <FinishingUp {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 4 && <Confirmation />}
        <div className={styles.steps} hidden={isConfirmation}>
          {!isFirstStep && (
            <Button
              style="back"
              text="Go back"
              type="button"
              onClick={goBackwards}
            />
          )}
          <Button
            style={isLastStep ? "submit" : "default"}
            text={isLastStep ? "Confirm" : "Next Step"}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
