import React, { useState, MouseEvent } from 'react';


//Typings
import ICircle from './components/Circles/typings/ICircle';


//Utils
import randomRGBValue from './utils/randomRGBValue';


//Icons
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';


//Components
import {
	Button,
	Circles,
	Divider,
	Header,
	IconButton,
} from './components';


//Styeled components
import styled from 'styled-components';


const Main = styled.main`
	height: 100vh;
	position: relative;
`;


//Main component content
const App = (): JSX.Element => {
	
	const [ circlesArray, setCirclesArray ] = useState<ICircle[]>([]);
	const [ redoCirclesArray, setRedoCirclesArray ] = useState<ICircle[]>([]);

	//When user clicks somewhere, obtain its coords
	const onClick = (event: MouseEvent<HTMLInputElement>) => {
		const newCircle: ICircle = {
			xPos: event.clientX,
			yPos: event.clientY,
			backgroundColor: `${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()}`,
		}
		
		const newValue: ICircle[] = [...circlesArray, newCircle ];
		setCirclesArray(newValue);
		setRedoCirclesArray(newValue);
	};
	
	//Clear all circles
	const clearCircles = () => {
		setCirclesArray([]); //Clear array
	};
	
	
	//Remove last spawned circle
	const undoCircle = () => {
		//Save actual array
		setRedoCirclesArray([...circlesArray]);
		
		//Save actual array to mutate it
		const newValue = [...circlesArray];
		newValue.pop(); //Remove last element
		setCirclesArray(newValue); //Update state
	};

	//Return no last set of circles
	const redoCircles = () => {
		setCirclesArray([...redoCirclesArray]);
	};


	//Main component render
	return (
		<>
			<Header>
				<Button onClick={clearCircles} disabled={circlesArray.length === 0} >
					Clear
				</Button>
				<Divider />
				<IconButton onClick={undoCircle} disabled={circlesArray.length === 0} >
					<ImArrowLeft />
				</IconButton>
				<IconButton onClick={redoCircles} disabled={ redoCirclesArray.length === circlesArray.length } >
					<ImArrowRight />
				</IconButton>
			</Header>
			<Main className='main' onClick={onClick} >
				<Circles circles={circlesArray} />
			</Main>
		</>
	);
};


export default App; //Export main component
