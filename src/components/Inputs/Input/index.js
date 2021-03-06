import { useEffect, useState } from 'react';
import { input, inputContainer, label } from './Input.module.css';

function Input({ updateInfo, currentInfo = '', type, labelText, id }) {
	const [ state, setState ] = useState(currentInfo);
  /*lets us reset the form on submission (for AddProduct)*/
	useEffect(() => setState(currentInfo), [ currentInfo ]);

	return (
		<div className={inputContainer}>
			<label className={label} htmlFor={id}>
				{labelText}
			</label>
			<input
				type={type}
				id={id}
				className={input}
				value={state}
				onChange={(e) => {
					setState(e.target.value);
					updateInfo(e);
				}}
			/>
		</div>
	);
}

export default Input;
