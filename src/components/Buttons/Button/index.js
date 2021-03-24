import { button, css } from '../Button.module.css';

function Button({ className = "", textContent, onClick, disabled = false }) {
	return (
		<button
			className={`${button} ${css[className]}`}
			onClick={onClick}
			disabled={disabled}
		>
			{textContent}
		</button>
	);
}

export default Button;