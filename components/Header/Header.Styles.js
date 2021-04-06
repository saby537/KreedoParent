import { StyleSheet, Dimensions } from 'react-native';
import Color from '../../utils/Color';
const HeaderStyles = StyleSheet.create({
	mainContainer: {
		width: '8%',
		height: '100%',
		paddingTop: 30,
		paddingBottom: 10,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Color.DARK_BLUE,
	},
	touchableContainer: {
		width: '100%',
		flex: 1,
		margin: '5%',
	},
	iconContainer: {
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	activeTouchable: {
		padding: '0%',
		justifyContent: 'flex-start',
		width: '100%',
		flexDirection: 'row',
	},
	activeIcon: {
		backgroundColor: Color.WHITE,
		borderTopRightRadius: 7,
		borderBottomRightRadius: 7,
		width: '100%',
		padding: '5%',
	},
	icon: {
		width: '100%',
		height: '100%',
	},
	selectIcon: {
		borderColor: Color.BLACK,
		borderWidth: 1,
		width: '50%',
		height: '50%',
	},
	arrowContainer: {
		width: '18%',
		height: '100%',
	},
});

export default HeaderStyles;
