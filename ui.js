"use strict";
const React = require("react");
const { useState, useEffect } = require("react");
const { useInput, useApp, Box, Text } = require("ink");

/* const Counter = () => {
	const [counter, setCounter] = useState(0);

 	useEffect(() => {
 		const timer = setInterval(() => {
 			setCounter((previousCounter) => previousCounter + 1);
 		}, 100);

		return () => {
 			clearInterval(timer);
 		};
 	}, []);

 	return <Text color="green">{counter} tests passed</Text>;

};*/

/* const App = ({ name = "Tara-tessa" }) => (
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
); */

const Robot = () => {
	const { exit } = useApp();
	const [x, setX] = React.useState(1);
	const [y, setY] = React.useState(1);
	const [s, setS] = React.useState(1);
	const [d, setD] = React.useState(1);

	useInput((input, key) => {
		if (input === "q") {
			exit();
		}

		if (key.leftArrow) {
			setX(Math.max(1, x - 1));
		}

		if (key.rightArrow) {
			setX(Math.min(20, x + 1));
		}

		if (key.upArrow) {
			setY(Math.max(1, y - 1));
		}

		if (key.downArrow) {
			setY(Math.min(10, y + 1));
			console.log(y);
		}
	});

	useInput((input, key) => {
		if (input === "q") {
			exit();
		}

		if (key.leftArrow) {
			console.log(key);
			setS(Math.max(5, s - 5));
		}

		if (key.rightArrow) {
			setS(Math.min(10, d + 10));
		}

		if (key.return) {
			setD(Math.max(10, d - 10));
		}

		if (key.delete) {
			setD(Math.min(-10, d - 10));
		}
	});

	return (
		<Box flexDirection="column">
			<Text borderStyle="round" marginRight={2}>
				Put out the fire by clicking your keys.
			</Text>
			<Box height={10} paddingLeft={x} paddingTop={y}>
				<Text paddingLeft={x} paddingTop={y}>
					🔥
				</Text>
			</Box>
			<Box height={10} paddingLeft={s} paddingTop={d}>
				<Text paddingLeft={s} paddingTop={d}>
					💧
				</Text>
			</Box>
		</Box>
	);
};

module.exports = Robot;
// module.exports = Counter;
// module.exports = App;
