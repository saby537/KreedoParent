import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const StatsDivStyles = StyleSheet.create({
	statContainer: {
		margin: 10,
		position: 'relative',
		alignItems: 'center',
	},
	zRotate: {
		top: 5,
		width: 100,
		height: 100,
		flexDirection: 'row',
		transform: [{ rotateZ: '270deg' }],
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 60,
		backgroundColor: Color.WHITE,
		elevation: 15,
		shadowColor: Color.BLACK,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
	},
	statValueContainer: {
		top: -63,
		alignItems: 'center',
		flex: 1,
		elevation: 50,
	},
	statValue: {
		fontSize: 22,
		fontWeight: 'bold',
		color: Color.BLACK,
	},
	titleContainer: {
		alignItems: 'center',
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		color: Color.BLACK,
	},
});

export default StatsDivStyles;
