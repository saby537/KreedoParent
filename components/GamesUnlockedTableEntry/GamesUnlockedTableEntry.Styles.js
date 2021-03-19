import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const GamesUnlockedTableEntryStyles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'column',
	},
	entryContainer: {
		flexDirection: 'row',
	},
	entryColumn: {
		padding: 2,
		color: Color.BLACK,
		textAlign: 'center',
		borderColor: Color.SKY_BLUE,
		backgroundColor: Color.WHITE,
		borderWidth: 0.5,
		fontSize: 14,
		textAlignVertical: 'center',
	},
	actionColumn: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	reportIcon: {
		width: 20,
		height: 25,
	},
});

export default GamesUnlockedTableEntryStyles;
