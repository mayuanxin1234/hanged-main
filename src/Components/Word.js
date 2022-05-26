import React from "react";

const Word = props => {
	console.log("selected word " + props.selectedWord);
	console.log("correctLetters" + props.correctLetters);
	const numbers = [1, 2, 3, 4, 5];
	let splitCorrect = props.selectedWord.split("");
	console.log(splitCorrect.length);
	const wow = numbers.map(x => <div>"_"</div>);
	return (
		<div className="Word">
			<ul>{wow}</ul>
		</div>
	);
};

export default Word;
