import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const GUDropDownSubLevelStyles = StyleSheet.create({
	dropDownMainContainer: {
		backgroundColor: Color.WHITE,
	},
	attemptHeader: {
		backgroundColor: Color.SKY_BLUE,
		flexDirection: 'row',
	},
	attemptCol: {
		textAlign: 'center',
		fontSize: 16,
		padding: 3,
		borderRightColor: Color.WHITE,
		borderRightWidth: 1,
		borderTopColor: Color.WHITE,
		borderTopWidth: 1,
		alignItems: 'center',
	},
	levelCol: {
		textAlign: 'center',
		fontSize: 16,
		padding: 3,
		borderRightColor: Color.SKY_BLUE,
		borderRightWidth: 1,
		alignItems: 'center',
		textAlignVertical: 'center',
		borderTopColor: Color.SKY_BLUE,
		borderTopWidth: 1,
	},
	attemptCol1: {
		width: '18%',
		justifyContent: 'center',
		paddingLeft: '5%',
	},
	attemptCol2: {
		width: '22%',
	},
	attemptCol3: {
		width: '60%',
		flexDirection: 'row',
		paddingLeft: 10,
		justifyContent: 'space-between',
		borderRightColor: Color.WHITE,
		alignItems: 'center',
	},
	touchableContainer: {
		width: '7%',
		height: 20,
		alignItems: 'flex-end',
	},
	arrowIcon: {
		height: '100%',
		width: '80%',
	},
	levelEntry: {
		backgroundColor: Color.WHITE,
		flexDirection: 'row',
	},
});

export default GUDropDownSubLevelStyles;
