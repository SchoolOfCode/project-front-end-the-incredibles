import { Checkbox } from '@chakra-ui/react';
import {checkbox} from "./IsTradingInput.module.css";

function IsTradingInput({ updateIsTrading, currentValue }) {
	return (
		<Checkbox
			className={checkbox}
			bg='#FF5A5F'
			color='black'
			colorScheme='black'
			iconColor='white'
			size='lg'
			spacing='1rem'
			isChecked={currentValue}
			onChange={(e) => updateIsTrading(!currentValue)}
		>
			Currently Trading
		</Checkbox>
	);
}

export default IsTradingInput;
