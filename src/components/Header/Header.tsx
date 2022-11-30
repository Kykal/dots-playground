import React from 'react';


//Interfaces
import IHeader from './IHeader';


//Styled components
import styled from 'styled-components';

const HeaderSx = styled.header`
	display: flex;
	position: fixed;
	z-index: 999;
`;


//Main component content
const Header = (props: IHeader) => {
	//Main component render
	return (
		<HeaderSx className='header' >
			{props.children}
		</HeaderSx>
	);
};


export default Header; //Export main component
