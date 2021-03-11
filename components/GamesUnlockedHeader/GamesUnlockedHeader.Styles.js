import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const GamesUnlockedHeaderStyles = StyleSheet.create({
	guContainer: {
		flexDirection: 'row',
		height: 40,
		alignItems: 'center',
		padding: 5,
		marginTop: 15,
		justifyContent: 'space-between',
	},
	headerIconContainer: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	nameIconContainer: {
		marginTop: 5,
		width: 40,
		height: 40,
		zIndex: -1,
		borderRadius: 25,
		borderWidth: 5,
		overflow: 'hidden',
		borderColor: Color.BORDER_GREEN,
		backgroundColor: Color.WHITE,
	},
	nameIcon: {
		width: '100%',
		height: '100%',
		borderRadius: 25,
		zIndex: -1,
	},
	userIcon: {
		marginTop: -5,
		width: 15,
		height: 15,
		zIndex: 10,
		opacity: 0.8,
	},
	gameScroll: {
		width: '50%',
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconContainer: {
		width: '20%',
		height: '100%',
	},
	icon: {
		width: '100%',
		height: '100%',
	},
	arrowContainer: {
		height: '60%',
		width: '20%',
	},
	textContainer: {
		textAlignVertical: 'center',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	homeIconContainer: {
		width: 40,
		height: 40,
		backgroundColor: Color.SKY_BLUE,
		justifyContent: 'center',
		alignItems: 'center',
	},
	homeIcon: {
		width: '100%',
		height: '100%',
	},
});

export default GamesUnlockedHeaderStyles;
