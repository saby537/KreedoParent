import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const GamesUnlockedTableHeaderStyles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
	},
	headerColumn: {
		padding: 2,
		backgroundColor: Color.DARK_BLUE,
		color: Color.WHITE,
		textAlign: 'center',
		borderColor: Color.SKY_BLUE,
		borderWidth: 0.5,
		fontSize: 16,
		textAlignVertical: 'center',
	},
});

export default GamesUnlockedTableHeaderStyles;
