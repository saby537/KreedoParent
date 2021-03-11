import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
const CardStyles = StyleSheet.create({
	card: {
		shadowColor: Color.BLACK,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		elevation: 8,
		backgroundColor: Color.WHITE,
		padding: 20,
		borderRadius: 10,
	},
});

export default CardStyles;
