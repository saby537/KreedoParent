import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import GamesNotYetStartedTableEntryStyles from './GamesNotYetStartedTableEntry.Styles';
import GamesUnlockedStyles from '../../Pages/GamesUnlocked/GamesUnlocked.Styles';
import EyeIcon from '../../assets/ParentCorner/Profile_Parent_Details_witness.svg';
const GamesUnlockedTableEntry = ({ name }) => {
	return (
		<View style={GamesNotYetStartedTableEntryStyles.mainContainer}>
			<View style={GamesNotYetStartedTableEntryStyles.entryContainer}>
				<Text
					style={[
						GamesUnlockedStyles.col1,
						GamesNotYetStartedTableEntryStyles.entryColumn,
					]}
				>
					{name}
				</Text>
				<Text
					style={[
						GamesUnlockedStyles.col2,
						GamesNotYetStartedTableEntryStyles.entryColumn,
					]}
				>
					-
				</Text>
				<Text
					style={[
						GamesUnlockedStyles.col3,
						GamesNotYetStartedTableEntryStyles.entryColumn,
					]}
				>
					-
				</Text>
				<Text
					style={[
						GamesUnlockedStyles.col4,
						GamesNotYetStartedTableEntryStyles.entryColumn,
					]}
				>
					-
				</Text>
				<Text
					style={[
						GamesUnlockedStyles.col5,
						GamesNotYetStartedTableEntryStyles.entryColumn,
					]}
				>
					-
				</Text>
				<Text
					style={[
						GamesUnlockedStyles.col6,
						GamesNotYetStartedTableEntryStyles.entryColumn,
					]}
				>
					-
				</Text>
				<Text
					style={[
						GamesUnlockedStyles.col7,
						GamesNotYetStartedTableEntryStyles.entryColumn,
					]}
				>
					-
				</Text>
				<View
					style={[
						GamesUnlockedStyles.col8,
						GamesNotYetStartedTableEntryStyles.entryColumn,
						GamesNotYetStartedTableEntryStyles.actionColumn,
					]}
				>
					<EyeIcon width={20} height={20} />
				</View>
			</View>
		</View>
	);
};
export default GamesUnlockedTableEntry;
