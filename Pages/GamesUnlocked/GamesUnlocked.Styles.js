import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const GamesUnlockedStyles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingHorizontal: '5%',
		marginTop: 20,
	},
	tableContainer: {
		width: '100%',
		marginTop: 15,
		flex: 1,
		marginBottom: 10,
	},
	headerContainer: {
		flexDirection: 'row',
		backgroundColor: Color.DARK_BLUE,
	},
	headerColumn: {
		padding: 2,
		color: Color.WHITE,
		textAlign: 'center',
		borderColor: Color.WHITE,
		borderWidth: 1,
		fontSize: 16,
		textAlignVertical: 'center',
	},
	col1: {
		width: '13%',
	},
	col2: {
		width: '11%',
	},
	col3: {
		width: '8%',
	},
	col4: {
		width: '15%',
	},
	col5: {
		width: '14%',
	},
	col6: {
		width: '14%',
	},
	col7: {
		width: '14%',
	},
	col8: {
		width: '11%',
	},
});

export default GamesUnlockedStyles;
