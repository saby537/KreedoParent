import React from 'react';
import { View } from 'react-native';
import CardStyles from './Card.Styles';
const Card = (props) => {
	return (
		<View style={{ ...CardStyles.card, ...props.style }}>{props.children}</View>
	);
};
export default Card;
