import { FormItems, planOptions } from "../App";

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

const FinishingUp = ({
  planLength,
  plan,
  updateForm,
  isCustomizableProfile,
  isLargerStorage,
  isOnlineService,
}: StepProps) => {
  // grab values for every true boolean
  // add yearly/monthly plan value
  // reduce to final value
  const planTotal = !planLength
    ? planOptions[plan].monthly
    : planOptions[plan].yearly;

  const addOnTotal = [
    isCustomizableProfile,
    isLargerStorage,
    isOnlineService,
  ].reduce((acc, addOn, index) => {
    if (!addOn) return acc;
    const name = ["customizableProfile", "largerStorage", "onlineServices"][
      index
    ] as "customizableProfile" | "largerStorage" | "onlineServices";
    const planName = !planLength ? "monthly" : "yearly";
    const numToAdd = planOptions[name][planName];
    return acc + numToAdd;
  }, 0);

  return (
    <div>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div>
        <div>
          <div data-left>
            {plan} {planLength ? "(Yearly)" : "(Monthly)"}
            <button
              type="button"
              onClick={() => updateForm({ planLength: !planLength })}
            >
              Change
            </button>
          </div>
          <div data-right>
            $
            {!planLength ? planOptions[plan].monthly : planOptions[plan].yearly}
            /{!planLength ? "mo" : "yr"}
          </div>
          {/* <div className="line"></div> */}
        </div>
        {isOnlineService && (
          <div>
            <div data-left>
              <p>Online Service</p>
            </div>
            <div data-right>
              $
              {!planLength
                ? planOptions.onlineServices.monthly
                : planOptions.onlineServices.yearly}
              /{!planLength ? "mo" : "yr"}
            </div>
          </div>
        )}
        {isLargerStorage && (
          <div>
            <div data-left>
              <p>Larger Storage</p>
            </div>
            <div data-right>
              $
              {!planLength
                ? planOptions.largerStorage.monthly
                : planOptions.largerStorage.yearly}
              /{!planLength ? "mo" : "yr"}
            </div>
          </div>
        )}
        {isCustomizableProfile && (
          <div>
            <div data-left>
              <p>Customizable Profile</p>
            </div>
            <div data-right>
              $
              {!planLength
                ? planOptions.customizableProfile.monthly
                : planOptions.customizableProfile.yearly}
              /{!planLength ? "mo" : "yr"}
            </div>
          </div>
        )}
      </div>
      <div>
        <div data-left>
          <p>Total (per year)</p>
        </div>
        <div data-right>
          ${planTotal + addOnTotal}/{!planLength ? "mo" : "yr"}
        </div>
      </div>
    </div>
  );
};
export default FinishingUp;
