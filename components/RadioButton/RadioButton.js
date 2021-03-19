import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RadioButtonStyles from './RadioButton.Styles';
const RadioButton = ({ content, active, buttonClickHandler, id }) => {
	return (
		<View style={RadioButtonStyles.mainContainer}>
			<TouchableOpacity
				activeOpacity={1}
				onPress={() => buttonClickHandler(id)}
			>
				<View style={RadioButtonStyles.buttonContainer}>
					{active && <View style={RadioButtonStyles.button}></View>}
				</View>
			</TouchableOpacity>
			<View style={RadioButtonStyles.contentContainer}>
				<Text style={RadioButtonStyles.content}>{content}</Text>
			</View>
		</View>
	);
};

export default RadioButton;
