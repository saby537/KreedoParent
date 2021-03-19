import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const ProgressBarStyles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingVertical: '10%',
		paddingHorizontal: '5%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Color.WHITE,
	},
	outerProgress: {
		width: '100%',
		height: '100%',
		borderRadius: 5,
		backgroundColor: Color.GREY,
		justifyContent: 'center',
		alignItems: 'flex-start',
		overflow: 'hidden',
	},
	innerProgress: {
		height: '100%',
		borderRadius: 5,
	},
});

export default ProgressBarStyles;
