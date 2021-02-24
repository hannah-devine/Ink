"use strict";
const React = require("react");
const { Text } = require("ink");
const { Box } = require("ink");
// const { useState, useEffect } = require("react");

const App = ({ name = "Tara-tessa" }) => (
	<>
		<Text>
			Hello, <Text color="green">{name}</Text>
		</Text>
		<Box flexDirection="column">
			<Box>
				<Box borderStyle="single" marginRight={2}>
					<Text>single</Text>
				</Box>

				<Box borderStyle="double" marginRight={2}>
					<Text>double</Text>
				</Box>

				<Box borderStyle="round" marginRight={2}>
					<Text>round</Text>
				</Box>

				<Box borderStyle="bold">
					<Text>bold</Text>
				</Box>
			</Box>

			<Box marginTop={1}>
				<Box borderStyle="singleDouble" marginRight={2}>
					<Text>singleDouble</Text>
				</Box>

				<Box borderStyle="doubleSingle" marginRight={2}>
					<Text>doubleSingle</Text>
				</Box>

				<Box borderStyle="classic">
					<Text>classic</Text>
				</Box>
			</Box>
		</Box>
	</>
);

module.exports = App;

// const Counter = () => {
// 	const [counter, setCounter] = useState(0);

// 	useEffect(() => {
// 		const timer = setInterval(() => {
// 			setCounter((previousCounter) => previousCounter + 1);
// 		}, 100);

// 		return () => {
// 			clearInterval(timer);
// 		};
// 	}, []);

// 	return <Text color="green">{counter} tests passed</Text>;
// };

// module.exports = Counter;
