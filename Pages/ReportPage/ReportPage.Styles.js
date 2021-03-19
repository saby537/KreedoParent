import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const ReportPageStyles = StyleSheet.create({
	reportContainer: {
		flex: 1,
		paddingHorizontal: '5%',
		alignItems: 'center',
	},
	topContainer: {
		width: '100%',
		height: '15%',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	nameTagContainer: {
		flex: 1,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	userIcon: {
		marginTop: -8,
		marginLeft: 20,
		width: 17,
		height: 17,
		zIndex: 10,
		opacity: 0.8,
	},
	homeIconContainer: {
		width: '9%',
		height: '100%',
		padding: 5,
		backgroundColor: Color.SKY_BLUE,
		justifyContent: 'center',
		alignItems: 'center',
	},
	homeIcon: {
		marginTop: 10,
		width: '90%',
		height: '90%',
	},
	childStatsContainer: {
		marginTop: 10,
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
	TouchableOption: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
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
