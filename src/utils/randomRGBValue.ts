/**Returns an integer value between 0 and 255*/
const randomRGBValue = (): number => {
	const r = Math.floor( Math.random() * 255 );
	
	return r;
};

export default randomRGBValue;
