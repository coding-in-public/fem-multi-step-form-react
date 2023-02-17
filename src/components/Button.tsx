type Props = {
  type?: "submit" | "button";
  text: string;
  style: "submit" | "default" | "back";
  onClick?: () => void;
}

const Button = ({style = "default", text, type = "submit", onClick}: Props) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${style}`}>{text}</button>
  )
}
export default Button