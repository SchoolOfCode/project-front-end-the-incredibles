import { button } from './Button.module.css';

function Button({
	bg = 'white',
	color = 'black',
	textContent,
	onClick,
	disabled = false,
}) {
	//overwrites CSS Variables
	const variableSet = {
		'--color' : color,
		'--bg'    : bg,
	};

	return (
		<button
			style={variableSet}
			className={button}
			onClick={onClick}
			disabled={disabled}
		>
			{textContent}
		</button>
	);
}

export default Button;
