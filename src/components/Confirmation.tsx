// styles
import styles from "./Confirmation.module.css";

// assets
import circleCheck from "../assets/images/icon-thank-you.svg";

const Confirmation = () => {
  return (
    <div className={styles.wrapper}>
      <img src={circleCheck} alt="" />
      <h1>Thank you!</h1>
      <p className="muted">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
export default Confirmation;
