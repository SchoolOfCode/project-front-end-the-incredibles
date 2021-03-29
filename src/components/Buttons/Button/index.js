import {button} from '../Button.module.css';

function Button({ classNames, textContent, onClick, disabled = false }) {
	
	return (
		<button
			className={`${button} ${classNames}`}
			onClick={onClick}
			disabled={disabled}
		>
			{textContent}
		</button>
	);
}

export default Button;
