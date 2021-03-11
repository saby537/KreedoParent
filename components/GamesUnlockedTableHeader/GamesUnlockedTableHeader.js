import React from 'react';
import { Text, View } from 'react-native';
import GamesUnlockedTableHeaderStyles from './GamesUnlockedTableHeader.Styles';
import GamesUnlockedStyles from '../../Pages/GamesUnlocked/GamesUnlocked.Styles';

const GamesUnlocked = (props) => {
	return (
		<View style={GamesUnlockedTableHeaderStyles.headerContainer}>
			<Text
				style={[
					GamesUnlockedStyles.col1,
					GamesUnlockedTableHeaderStyles.headerColumn,
				]}
			>
				Game Name
			</Text>
			<Text
				style={[
					GamesUnlockedStyles.col2,
					GamesUnlockedTableHeaderStyles.headerColumn,
				]}
			>
				Attempts
			</Text>
			<Text
				style={[
					GamesUnlockedStyles.col3,
					GamesUnlockedTableHeaderStyles.headerColumn,
				]}
			>
				Time Spent
			</Text>
			<Text
				style={[
					GamesUnlockedStyles.col4,
					GamesUnlockedTableHeaderStyles.headerColumn,
				]}
			>
				Level Completion Status
			</Text>
			<Text
				style={[
					GamesUnlockedStyles.col5,
					GamesUnlockedTableHeaderStyles.headerColumn,
				]}
			>
				Date Unlocked
			</Text>
			<Text
				style={[
					GamesUnlockedStyles.col6,
					GamesUnlockedTableHeaderStyles.headerColumn,
				]}
			>
				Date Completed
			</Text>
			<Text
				style={[
					GamesUnlockedStyles.col7,
					GamesUnlockedTableHeaderStyles.headerColumn,
				]}
			>
				Date last played
			</Text>
			<Text
				style={[
					GamesUnlockedStyles.col8,
					GamesUnlockedTableHeaderStyles.headerColumn,
				]}
			>
				Actions
			</Text>
		</View>
	);
};
export default GamesUnlocked;
