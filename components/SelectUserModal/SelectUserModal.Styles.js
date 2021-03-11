import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const SelectUserModalStyles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	modalView: {
		margin: 20,
		width: '80%',
		backgroundColor: Color.SKY_BLUE,
		borderColor: Color.DARK_BLUE,
		borderWidth: 2,
		borderRadius: 10,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		alignItems: 'center',
	},
	modalHeader: {
		width: '100%',
		backgroundColor: Color.DARK_BLUE,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	headerText: {
		color: Color.WHITE,
		fontWeight: 'bold',
		padding: 5,
		paddingLeft: 15,
		fontSize: 16,
	},
	closeIconContainer: {
		height: 25,
		width: 25,
		marginRight: 10,
		borderRadius: 20,
		backgroundColor: Color.WHITE,
		alignItems: 'center',
		justifyContent: 'center',
	},
	closeText: {
		color: Color.DARK_BLUE,
		fontWeight: 'bold',
		fontSize: 20,
	},
	nameTagView: {
		padding: 20,
		flexDirection: 'row',
	},
	button: {
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 5,
		padding: 10,
		elevation: 10,
		backgroundColor: Color.PINK,
	},
	select: {
		color: Color.WHITE,
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 16,
	},
});

export default SelectUserModalStyles;
