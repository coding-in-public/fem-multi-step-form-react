import { FormItems, planOptions } from "../App";

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

const PickAddOns = ({
  isOnlineService,
  isLargerStorage,
  isCustomizableProfile,
  updateForm,
  planLength,
}: StepProps) => {
  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div>
        <div>
          <input
            type="checkbox"
            name="isOnlineService"
            id="isOnlineService"
            checked={isOnlineService}
            onChange={(e) => updateForm({ isOnlineService: e.target.checked })}
          />
          <label htmlFor="isOnlineService">
            {/* <div>BOX</div> */}
            <div>
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </div>
            <p>
              +$
              {!planLength
                ? planOptions.onlineServices.monthly
                : planOptions.onlineServices.yearly}
              /{!planLength ? "mo" : "yr"}
            </p>
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="isLargerStorage"
            id="isLargerStorage"
            checked={isLargerStorage}
            onChange={(e) => updateForm({ isLargerStorage: e.target.checked })}
          />
          <label htmlFor="isLargerStorage">
            {/* <div>BOX</div> */}
            <div>
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
            <p>
              +$
              {!planLength
                ? planOptions.largerStorage.monthly
                : planOptions.largerStorage.yearly}
              /{!planLength ? "mo" : "yr"}
            </p>
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="isCustomizableProfile"
            id="isCustomizableProfile"
            checked={isCustomizableProfile}
            onChange={(e) =>
              updateForm({ isCustomizableProfile: e.target.checked })
            }
          />
          <label htmlFor="isCustomizableProfile">
            {/* <div>BOX</div> */}
            <div>
              <h3>Customize Profile</h3>
              <p>Custom theme on your profile</p>
            </div>
            <p>
              +$
              {!planLength
                ? planOptions.customizableProfile.monthly
                : planOptions.customizableProfile.yearly}
              /{!planLength ? "mo" : "yr"}
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};
export default PickAddOns;
