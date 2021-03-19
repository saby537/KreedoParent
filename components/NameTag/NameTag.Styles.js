import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const NameTagStyles = StyleSheet.create({
	nameContainer: {
		flexDirection: 'row',
		height: 40,
		width: 220,
		alignItems: 'center',
		padding: 5,
		marginTop: 15,
	},
	nameIconContainer: {
		width: 50,
		height: 50,
		zIndex: 2,
		borderRadius: 25,
		borderWidth: 5,
		overflow: 'hidden',
	},
	active: {
		borderColor: Color.BORDER_GREEN,
		backgroundColor: Color.WHITE,
	},
	passive: {
		borderColor: Color.WHITE,
		backgroundColor: Color.GREY,
	},
	nameIcon: {
		width: '100%',
		height: '100%',
		borderRadius: 25,
		zIndex: -1,
	},
	nameDetailContainer: {
		flex: 1,
		height: 37,
		width: 150,
		borderColor: Color.WHITE,
		borderWidth: 4,
		marginLeft: -10,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		justifyContent: 'center',
	},
	detailActive: {
		backgroundColor: Color.BLACK,
		color: Color.WHITE,
	},
	detailPassive: {
		backgroundColor: Color.GREY,
		color: Color.DARK_GREY,
	},
	nameDetail: {
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		paddingLeft: 10,
	},
});

export default NameTagStyles;
