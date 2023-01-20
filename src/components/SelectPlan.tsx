import { FormItems, planOptions } from "../App";

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

const SelectPlan = ({ plan, planLength, updateForm }: StepProps) => {
  return (
    <div>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div>
        <div>
          {/* <img src="" alt="" /> */}
          <label htmlFor="Arcade">
            <p>Arcade</p>
            <p>
              $
              {!planLength
                ? planOptions.Arcade.monthly
                : planOptions.Arcade.yearly}
              /{!planLength ? "mo" : "yr"}
            </p>
          </label>
          <input
            id="Arcade"
            name="plan"
            type="radio"
            checked={plan === "Arcade"}
            onChange={(e) => updateForm({ plan: "Arcade" })}
          />
          {planLength && <p>2 months free</p>}
        </div>
        <div>
          {/* <img src="" alt="" /> */}
          <label htmlFor="Advanced">
            <p>Advanced</p>
            <p>
              $
              {!planLength
                ? planOptions.Advanced.monthly
                : planOptions.Advanced.yearly}
              /{!planLength ? "mo" : "yr"}
            </p>
          </label>
          <input
            id="Advanced"
            name="plan"
            type="radio"
            checked={plan === "Advanced"}
            onChange={(e) => updateForm({ plan: "Advanced" })}
          />
          {planLength && <p>2 months free</p>}
        </div>
        <div>
          {/* <img src="" alt="" /> */}
          <label htmlFor="Pro">
            <p>Pro</p>
            <p>
              ${!planLength ? planOptions.Pro.monthly : planOptions.Pro.yearly}/
              {!planLength ? "mo" : "yr"}
            </p>
          </label>
          <input
            id="Pro"
            name="plan"
            type="radio"
            checked={plan === "Pro"}
            onChange={(e) => updateForm({ plan: "Pro" })}
          />
          {planLength && <p>2 months free</p>}
        </div>
      </div>
      <div>
        <label>
          <span>Monthly</span>
          <input
            type="checkbox"
            name="planLength"
            checked={planLength}
            onChange={(e) => updateForm({ planLength: e.target.checked })}
          />
          <span>Yearly</span>
        </label>
      </div>
    </div>
  );
};
export default SelectPlan;
