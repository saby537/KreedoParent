import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const ReportPageStyles = StyleSheet.create({
	reportContainer: {
		backgroundColor: Color.SKY_BLUE,
		flex: 1,
		width: '100%',
		alignItems: 'center',
	},
	topContainer: {
		width: '100%',
		height: '15%',
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	nameTagContainer: {
		flex: 1,
		marginTop: 20,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
	},
	homeIconContainer: {
		width: '9%',
		height: '100%',
		marginTop: 20,
		padding: 5,
		backgroundColor: Color.SKY_BLUE,
		justifyContent: 'center',
		alignItems: 'center',
	},
	homeIcon: {
		width: '80%',
		height: '80%',
	},
	childStatsContainer: {
		marginTop: 20,
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	horizontalLine: {
		marginTop: 20,
		borderWidth: 2,
		borderRadius: 4,
		borderColor: Color.WHITE,
		width: '85%',
	},
	GameStatsContainer: {
		marginTop: 10,
		height: 100,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '80%',
		alignItems: 'flex-start',
	},
	CardStyles: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		width: '45%',
		height: '100%',
	},
	verticalLine: {
		width: 4,
		borderRadius: 4,
		height: '100%',
		backgroundColor: Color.SKY_BLUE,
	},
	GameStats: {
		width: '50%',
		flexDirection: 'column',
		alignItems: 'center',
	},
	stats: {
		padding: 2,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	ReportOptions: {
		width: '45%',
		height: '100%',
		justifyContent: 'space-between',
	},
	ReportOption: {
		height: '40%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 5,
	},
	ReportIconContainer: {
		width: '15%',
		height: '100%',
	},
	reportIcon: {
		width: '100%',
		height: '100%',
	},
	option: {
		width: '70%',
		padding: 2,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default ReportPageStyles;
