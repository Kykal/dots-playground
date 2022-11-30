import React from 'react';

//Interfaces
import ICircles from './typings/ICircles';


//Custom components
import Circle from './Circle';
import ICircle from './typings/ICircle';

//Styled components
import styled from 'styled-components';


const CirclesContainer = styled.div`
	flex-grow: 1;
`;

//Main component content
const Circles = (props: ICircles): JSX.Element => {


	//Main component render
	return (
		<CirclesContainer className='circles-container' >
			{props.circles.map( ( circle: ICircle, index: number ) => (
				<Circle
					key={index}
					xPos={circle.xPos}
					yPos={circle.yPos}
					backgroundColor={circle.backgroundColor}
				/>
			) )}
		</CirclesContainer>
	);
};


export default Circles; //Export main component
