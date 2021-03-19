import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const RestartGameModalStyles = StyleSheet.create({
	mainContainer: {
		width: '100%',
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 2,
	},
	buttonContainer: {
		width: 40,
		height: 40,
		borderRadius: 40,
		backgroundColor: Color.WHITE,
		borderColor: Color.BLUISH_GREY,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 5,
	},
	button: {
		width: 30,
		height: 30,
		borderRadius: 30,
		zIndex: 5,
		backgroundColor: Color.DARK_BLUE,
	},
	contentContainer: {
		height: 30,
		flex: 1,
		borderColor: Color.BLUISH_GREY,
		borderWidth: 2,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		zIndex: -1,
		marginLeft: -10,
		paddingHorizontal: 15,
		justifyContent: 'center',
	},
});

export default RestartGameModalStyles;
