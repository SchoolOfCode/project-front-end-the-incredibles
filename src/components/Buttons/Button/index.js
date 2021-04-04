import { button } from "../Button.module.css";
import css from "../Button.module.css";
function Button({ className, textContent, onClick, disabled = false }) {
  return (
    <button
      data-testid="button-test"
      className={`${button} ${css[className]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {textContent}
    </button>
  );
}

export default Button;
