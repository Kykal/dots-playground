import React from 'react';


//Interfaces
import IClearButton from './IButton';



//Styled components
import styled from 'styled-components';

const ButtonContainer = styled.div`
	padding-top: 0.5em;
	padding-left: 1em;
`;

const ButtonSx = styled.button<IClearButton>`
	padding-left: 0.75em;
	padding-right: 0.75em;
	padding-top: 0.25em;
	padding-bottom: 0.25em;
`;


//Main component content
const ClearButton = (props: IClearButton) => {


	//Main component render
	return (
		<ButtonContainer className='button-container' >
			<ButtonSx
				className='button'
				onClick={props.onClick}
				disabled={props.disabled}
			>
				{props.children}
			</ButtonSx>
		</ButtonContainer>
	);
};


export default ClearButton; //Export main component
