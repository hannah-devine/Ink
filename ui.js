"use strict";
const React = require("react");
const { useInput, useApp, Box, Text } = require("ink");

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

const Robot = () => {
	const { exit } = useApp();
	const [x, setX] = React.useState(1);
	const [y, setY] = React.useState(1);

	const [a, setA] = React.useState(1);
	const [b, setB] = React.useState(1);


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
		}
	});

		useInput((input, key) => {
			if (input === "q") {
				exit();
			}

			if (key.leftArrow) {
				setA(Math.max(1, a - 1));
			}

			if (key.rightArrow) {
				setA(Math.min(20, a + 1));
			}

			if (key.upArrow) {
				setB(Math.max(1, b - 1));
			}

			if (key.downArrow) {
				setB(Math.min(10, b + 1));
			}
		});

	return (
		<Box flexDirection="column">
			<Text>Use arrow keys to move the face. Press “q” to exit.</Text>
			<Box height={12} paddingLeft={x} paddingTop={y}>
				<Text>🦄</Text>
			</Box>
			<Box height={12} paddingLeft={a} paddingTop={b}>
				<Text>🐝</Text>
			</Box>
		</Box>
	);
};

module.exports = Robot;

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
