import React from 'react';
import { View } from 'react-native';
import GUDropDownSubLevel from '../GUDropDownSubLevel/GUDropDownSubLevel';
import GamesUnlockedTableEntryDropDownStyles from './GamesUnlockedTableEntryDropDown.Styles';

const GamesUnlockedTableEntryDropDown = ({ attemptList }) => {
	return (
		<View style={GamesUnlockedTableEntryDropDownStyles.dropDownContainer}>
			{attemptList.map((attempt, id) => (
				<GUDropDownSubLevel attempt={attempt} key={id} />
			))}
		</View>
	);
};

export default GamesUnlockedTableEntryDropDown;
