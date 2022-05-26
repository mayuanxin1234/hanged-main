import React from "react";

import "../index.css";

const Word = props => {
	console.log("selected word " + props.selectedWord);
	console.log("correctLetters" + props.correctLetters);
	const numbers = [1, 2, 3, 4, 5];
	let splitCorrect = props.selectedWord.split("");
	console.log(splitCorrect.length);
	const wow = splitCorrect.map(inp => (
		<div className="colC">
			<h2>_</h2>
		</div>
	));

	<div className="rowC">{wow}</div>;
	return <div>{wow}</div>;
};

export default Word;
