import React from 'react';


//Styled components
import styled from 'styled-components';

const DividerSx = styled.hr`
	margin-left: 1em;
	margin-top: 0.5em;
`;

//Main component content
const Divider = () => {
	//Main component render
	return (
		<DividerSx />
	);
};


export default Divider; //Export main component
