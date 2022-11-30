import React from 'react';


//Utils
import randomRGBValue from '../../utils/randomRGBValue';


//Styled components
import styled from 'styled-components';
import ICircle from './typings/ICircle';


const CircleSx = styled.span<ICircle>`
	z-index: 1;
	position: absolute;
	top: calc(${props => props.yPos}px - (var(--dot-radius)/2));
	left: calc(${props => props.xPos}px - (var(--dot-radius)/2));
	width: var(--dot-radius);
	height: var(--dot-radius);
	border-radius: 50%;
	background-color: rgb(${props => props.backgroundColor});
`;




//Main component content
const Circle = (props: ICircle): JSX.Element => {

	const rgbValue: string = `${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()}`;

	//Main component render
	return (
		<CircleSx
			className='circle'
			xPos={props.xPos}
			yPos={props.yPos}
			backgroundColor={props.backgroundColor}
		/>
	);
};


export default Circle; //Export main component
