import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const GameCompletionReportTableEntryStyles = StyleSheet.create({
	entryContainer: {
		flexDirection: 'row',
		width: '100%',
		height: 30,
	},
	entryColumn: {
		paddingVertical: 4,
		backgroundColor: Color.WHITE,
		color: Color.BLACK,
		textAlign: 'center',
		borderColor: Color.SKY_BLUE,
		borderWidth: 0.5,
		fontSize: 16,
		textAlignVertical: 'center',
	},
});

export default GameCompletionReportTableEntryStyles;
