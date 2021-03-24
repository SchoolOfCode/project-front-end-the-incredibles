import { useState } from 'react';
import { input, inputContainer, label } from './Input.module.css';

function Input({ updateState, type, labelText, id }) {
	const [ state, setState ] = useState('');

	return (
		<div className={inputContainer}>
			<label className={label} for={id}>
				{labelText}
			</label>
			<input
				type={type}
				id={id}
				className={input}
				value={state}
				onChange={(e) => {
					setState(e.target.value);
					updateState(state);
				}}
			/>
		</div>
	);
}

export default Input;
