import React from 'react';


//Interfaces
import IIconButton from './IIconButton';


//Styled components
import styled from 'styled-components';

const IconButtonContainer = styled.div`
	padding-top: 0.5em;
	padding-left: 1em;
`;

const IconButtonSx = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	
	background: none;
	border-radius: 50%;
	border: none;
	color: rgba( 255, 255, 255, 0.7 );
	
	transition-duration: 100ms;
	
	cursor: pointer;
	
	min-width: 2em;
	min-height: 2em;
	
	&:hover {
		background-color: rgba( 255, 255, 255, 0.07 );
	}

	&:disabled {
		cursor: not-allowed;
		color: rgba( 255, 255, 255, 0.07 );
	}
	
	> svg {
		padding: 0.75em;
		transform: scale(1.5);
	}
`;


//Main component content
const IconButton = (props: IIconButton): JSX.Element => {
	//Main component render
	return (
		<IconButtonContainer  className='icon-button-container' >
			<IconButtonSx onClick={props.onClick} disabled={props.disabled} >
				{props.children}
			</IconButtonSx>
		</IconButtonContainer>
	);
};


export default IconButton; //Export main component
